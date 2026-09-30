import type { Ref } from 'vue';
import type { ContentNavigationItem } from '@nuxt/content';
import { useNuxtData, useRoute } from '#app';
import { findPageBreadcrumb } from '@nuxt/content/utils';
import { computed } from 'vue';
import { mapContentNavigation } from 'pohon-ui/utils/content';
import { isWithinPath, packageForPath } from '~/utils/package-registry';

interface NavigationSection {
  label: string;
  path: string;
  navigation: Array<ContentNavigationItem>;
}

function findNode(items: Array<ContentNavigationItem>, path: string): ContentNavigationItem | undefined {
  for (const item of items) {
    if (item.path === path) {
      return item;
    }

    const nested = findNode(item.children ?? [], path);
    if (nested) {
      return nested;
    }
  }
}

function withoutChildren(item: ContentNavigationItem): ContentNavigationItem {
  return { ...item, children: undefined };
}

function leafPages(items: Array<ContentNavigationItem>): Array<ContentNavigationItem> {
  return items.flatMap(item => item.children?.length ? leafPages(item.children) : [item]);
}

export function useNavigation(navigation: Ref<Array<ContentNavigationItem> | undefined>) {
  const route = useRoute();
  const activePackage = computed(() => packageForPath(route.path));
  const isGuide = computed(() => isWithinPath(route.path, '/windows-dev'));
  const contextLabel = computed(() => activePackage.value?.label ?? (isGuide.value ? 'Windows Dev' : undefined));
  const { data: perkakasMethods } = useNuxtData<Array<{ name: string; category?: string }>>('perkakas-methods');

  const sections = computed<Array<NavigationSection>>(() => {
    const current = activePackage.value ?? (isGuide.value
      ? { id: 'windows-dev', path: '/windows-dev' }
      : undefined);
    if (!current) {
      return [];
    }

    const root = findNode(navigation.value ?? [], current.path);
    const children = root?.children ?? [];
    const groups = children.filter(item => item.children?.length);
    const direct = children.filter(item => !item.children?.length);

    const functionPage = current.id === 'perkakas'
      ? direct.find(item => item.path === '/perkakas/functions')
      : undefined;
    const overviewPages = direct.filter(item => item !== functionPage);
    const overview: NavigationSection = {
      label: 'Overview',
      path: current.path,
      navigation: [
        ...(root ? [withoutChildren(root)] : []),
        ...overviewPages,
      ],
    };

    const result = [overview];

    if (functionPage) {
      const categories = new Map<string, Array<ContentNavigationItem>>();
      for (const method of perkakasMethods.value ?? []) {
        const category = method.category ?? 'Other';
        const children = categories.get(category) ?? [];
        children.push({
          title: method.name,
          path: `/perkakas/functions#${method.name}`,
        });
        categories.set(category, children);
      }

      result.push({
        label: 'Functions',
        path: functionPage.path,
        navigation: [functionPage, ...[...categories].map(([title, children]) => ({
          title,
          path: functionPage.path,
          children,
        }))],
      });
    }

    for (const group of groups) {
      result.push({
        label: group.title ?? group.path.split('/').pop() ?? 'Docs',
        path: group.path,
        navigation: [group],
      });
    }

    return result;
  });

  const activeSection = computed(() => {
    return [...sections.value]
      .reverse()
      .find(section => isWithinPath(route.path, section.path)) ?? sections.value[0];
  });

  const sectionTabs = computed(() => sections.value.map(section => ({
    label: section.label,
    to: leafPages(section.navigation)[0]?.path ?? section.path,
    active: activeSection.value?.path === section.path,
  })));

  const navigationByCategory = computed(() => activeSection.value?.navigation ?? []);
  const githubLink = computed(() => {
    const current = activePackage.value;
    return current ? `https://github.com/${current.repo}` : 'https://github.com/vinicunca';
  });

  function findBreadcrumb(path: string) {
    const current = activePackage.value;
    const breadcrumb = findPageBreadcrumb(navigation.value, path, { indexAsChild: true });
    return mapContentNavigation(breadcrumb).map(link => ({
      ...link,
      label: current && link.to === current.path ? current.label : link.label,
    }));
  }

  function findSurround(path: string) {
    const pages = leafPages(navigationByCategory.value).filter(item => !item.path.includes('#'));
    const index = pages.findIndex(item => item.path === path);
    return index < 0 ? [undefined, undefined] : [pages[index - 1], pages[index + 1]];
  }

  return {
    activePackage,
    activeSection,
    contextLabel,
    sections,
    sectionTabs,
    navigationByCategory,
    findBreadcrumb,
    findSurround,
    githubLink,
  };
}
