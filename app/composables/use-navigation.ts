import type { Ref } from '#imports';
import type { ContentNavigationItem, DocsCollectionItem } from '@nuxt/content';
import { computed, useNuxtData, useRoute } from '#imports';
import { findPageBreadcrumb, findPageChildren } from '@nuxt/content/utils';
import { mapContentNavigation } from 'pohon-ui/utils/content';

const githubMapper = new Map<any, any>(
  [
    ['eslint', { slug: 'eslint-config', label: 'ESLint' }],
    ['perkakas', { slug: 'perkakas', label: 'Perkakas' }],
    ['unocss-preset', { slug: 'unocss-preset', label: 'UnoCSS Preset' }],
    ['windows-dev', { slug: 'windows-dev', label: 'Windows Dev' }],
  ],
);

const categories = {
  perkakas: [
    {
      id: 'Number',
      title: 'Number',
    },
    {
      id: 'Object',
      title: 'Object',
    },
    {
      id: 'Array',
      title: 'Array',
    },
    {
      id: 'Function',
      title: 'Function',
    },
    {
      id: 'Guard',
      title: 'Guard',
    },
    {
      id: 'String',
      title: 'String',
    },
    {
      id: 'Utility',
      title: 'Utility',
    },
    {
      id: 'Other',
      title: 'Other',
    },
  ],
};

export function useNavigation(
  navigation: Ref<Array<ContentNavigationItem> | undefined>,
) {
  const route = useRoute();

  const pageModule = computed(() => {
    return route.path.split('/')[1] as DocsCollectionItem['package'];
  });

  const rootNavigation = computed(() => {
    return navigation.value?.filter((item) => item.package === pageModule.value);
  });

  function findBreadcrumb(path: string) {
    const breadcrumb = findPageBreadcrumb(navigation?.value, path, { indexAsChild: true });

    return mapContentNavigation(
      breadcrumb.slice(0),
    ).map(({ icon, ...link }) => {
      return {
        ...link,
        label: githubMapper.get(link.package)?.label,
      };
    });
  }

  const navigationByCategory = computed(() => {
    const route = useRoute();

    const slug = route.params.slug?.[0] as string;
    const children = findPageChildren(navigation?.value, `/${slug}`, { indexAsChild: true });

    if (!children.length) {
      return navigation.value ?? [];
    }

    if (slug === 'perkakas') {
      const { data } = useNuxtData<any>('perkakas-methods');

      if (data.value) {
        children.push(
          ...data.value.map((item: any) => ({
            ...item,
            path: `/perkakas/functions#${item.name}`,
            title: item.name,
          })),
        );
      }
    }

    return groupChildrenByCategory(children, slug);
  });

  function findSurround(path: string) {
    const flattenNavigation = navigationByCategory.value.flatMap((item) => item.children);

    const index = flattenNavigation.findIndex((item) => item?.path === path);
    if (index === -1) {
      return [undefined, undefined];
    }

    return [flattenNavigation[index - 1], flattenNavigation[index + 1]];
  }

  return {
    rootNavigation,
    findBreadcrumb,
    findSurround,
    navigationByCategory,
    githubLink: `https://github.com/vinicunca/${githubMapper.get(pageModule.value!)?.slug}`,
  };
}

function groupChildrenByCategory(items: Array<ContentNavigationItem>, slug: string): Array<ContentNavigationItem> {
  if (!items.length) {
    return [];
  }

  const groups: Array<ContentNavigationItem> = [];

  const categorized: Record<string, Array<ContentNavigationItem>> = {};
  const uncategorized: Array<ContentNavigationItem> = [];

  for (const item of items) {
    if (item.category) {
      categorized[item.category as string] = categorized[item.category as string] || [];
      categorized[item.category as string]?.push(item);
    } else {
      uncategorized.push(item);
    }
  }

  if (uncategorized.length) {
    const withChildren = uncategorized.filter((item) => item.children?.length)
      ?.map((item) => ({ ...item, children: item.children?.map((child) => ({ ...child, icon: undefined })) }));
    const withoutChildren = uncategorized.filter((item) => !item.children?.length);

    if (withoutChildren.length) {
      groups.push({
        title: 'Overview',
        path: `/${slug}`,
        children: withoutChildren,
      });
    }

    groups.push(...withChildren);
  }

  for (const category of categories[slug as keyof typeof categories] || []) {
    if (categorized[category.id]?.length) {
      groups.push({
        title: category.title,
        path: `/${slug}`,
        children: categorized[category.id],
      });
    }
  }

  return groups;
}
