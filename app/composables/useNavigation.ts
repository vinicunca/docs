import type { ContentNavigationItem } from '@nuxt/content';
import { findPageBreadcrumb, findPageChildren } from '@nuxt/content/utils';
import { mapContentNavigation } from 'pohon-ui/utils/content';

function groupChildrenByCategory(items: Array<ContentNavigationItem>, pkg: DocsPackage | undefined, sectionPath: string, slug: string): Array<ContentNavigationItem> {
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
      ?.map((item) => ({
        ...item,
        children: item.children?.map((child) => ({ ...child, icon: undefined })),
      }));
    const withoutChildren = uncategorized.filter((item) => !item.children?.length);

    if (withoutChildren.length) {
      groups.push({
        title: 'Overview',
        path: sectionPath,
        children: withoutChildren?.map((item) => ({ ...item, icon: undefined })),
      });
    }

    groups.push(...withChildren);
  }

  const categories = pkg?.categories?.[slug] || [];
  for (const category of categories) {
    if (categorized[category.id]?.length) {
      groups.push({
        title: category.title,
        path: sectionPath,
        class: category.framework
          ? [`${category.framework}-only`]
          : undefined,
        children: categorized[category.id],
      });
    }
  }

  // Categories a page declares but the package does not list keep their pages visible
  for (const [id, children] of Object.entries(categorized)) {
    if (!categories.some((category) => category.id === id)) {
      groups.push({
        title: id.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase()),
        path: sectionPath,
        children,
      });
    }
  }

  return groups;
}

function resolveNavigationIcon(item: ContentNavigationItem, icons: ReturnType<typeof useStudioIcons>) {
  let icon = item.icon;
  if (item.path.startsWith('/pohon/components')) {
    icon = icons.squareCode;
  }
  if (item.path.startsWith('/pohon/composables')) {
    icon = icons.squareFunction;
  }
  if (item.path.startsWith('/pohon/typography')) {
    icon = icons.squarePilcrow;
  }

  return {
    ...item,
    icon,
  };
}

function filterChildrenByFramework(item: ContentNavigationItem, framework: string, icons: ReturnType<typeof useStudioIcons>): ContentNavigationItem {
  const filteredChildren = item.children?.filter((child) => {
    if (child.path.startsWith('/pohon/components')) {
      return true;
    }

    if (child.framework && child.framework !== framework) {
      return false;
    }
    return true;
  })?.map((child) => filterChildrenByFramework(resolveNavigationIcon(child, icons), framework, icons));

  return {
    ...item,
    children: filteredChildren?.length ? filteredChildren : undefined,
  };
}

/** Where a section link lands: a folder without an index page has no route, so its first page. */
function sectionLanding(item: ContentNavigationItem): string {
  const first = item.children?.[0];
  return item.page === false && first
    ? sectionLanding(first)
    : item.path;
}

function processNavigationItem(item: ContentNavigationItem, parent?: ContentNavigationItem): ContentNavigationItem | Array<ContentNavigationItem> {
  if (item.shadow) {
    return item.children?.flatMap((child) => processNavigationItem(child, item)) || [];
  }

  return {
    ...item,
    title: parent?.title ? parent.title : item.title,
    badge: parent?.badge || item.badge,
    class: [item.framework && `${item.framework}-only`].filter(Boolean),
    children: item.children?.length
      ? item.children?.flatMap((child) => processNavigationItem(child))
      : undefined,
  };
}

/**
 * `navigation` holds one root item per package (`/pohon`, `/akar`, ...), each
 * with its sections (`/pohon/components`) as children. A package without
 * section folders keeps its pages directly under the root item.
 */
export function useNavigation(navigation: Ref<Array<ContentNavigationItem> | undefined>) {
  const route = useRoute();
  const { framework } = useFrameworks();
  // the section glyphs follow the applied icon pack
  const studioIcons = useStudioIcons();

  const currentPackage = computed(() => findDocsPackage(route.path));

  const rootNavigation = computed(() =>
    navigation.value?.map((item) => processNavigationItem(item)) as Array<ContentNavigationItem> | undefined,
  );

  /** The current package's sections, shown as header tabs. */
  const packageSections = computed(() => {
    const root = rootNavigation.value?.find((item) => item.path === `/${currentPackage.value?.id}`);
    return root?.children?.filter((item) => item.children?.length) ?? [];
  });

  /** The header's section links, active anywhere inside their section. */
  const sectionLinks = computed(() => mapContentNavigation(packageSections.value.map((item) => ({
    ...item,
    path: sectionLanding(item),
    children: undefined,
  }))).map((link, index) => {
    const section = packageSections.value[index]!.path;
    return {
      ...link,
      active: route.path === section || route.path.startsWith(`${section}/`),
    };
  }));

  /** Every package with framework-filtered pages, for the command palette. */
  const navigationByFramework = computed(() =>
    rootNavigation.value?.map((item) => filterChildrenByFramework(item, framework.value, studioIcons)),
  );

  /** The sidebar: the current section of the current package, grouped by category. */
  const navigationByCategory = computed(() => {
    const pkg = currentPackage.value;
    if (!pkg) {
      return [];
    }

    const slug = route.path.split('/')[2] as string;
    const sectionPath = `/${pkg.id}/${slug}`;
    const hasSections = packageSections.value.length > 0;
    const parentPath = hasSections
      ? sectionPath
      : `/${pkg.id}`;

    const children = findPageChildren(navigation?.value, parentPath, { indexAsChild: true });

    return groupChildrenByCategory(children, pkg, parentPath, slug);
  });

  function findSurround(path: string, fwk: string = framework.value): [ContentNavigationItem | undefined, ContentNavigationItem | undefined] {
    // an entry with its own `to` links out: nothing to step onto
    const flattenNavigation = navigationByCategory.value
      ?.flatMap((item) => filterChildrenByFramework(item, fwk, studioIcons)?.children)
      .filter((item) => !item?.to) ?? [];

    const index = flattenNavigation.findIndex((item) => item?.path === path);
    if (index === -1) {
      return [undefined, undefined];
    }

    return [flattenNavigation[index - 1], flattenNavigation[index + 1]];
  }

  function findBreadcrumb(path: string) {
    const breadcrumb = findPageBreadcrumb(navigation?.value, path, { indexAsChild: true });

    // A folder without an index page (`page: false`) has no route, so it stays plain text
    return mapContentNavigation(breadcrumb).map(({ icon, ...link }, index) => breadcrumb[index]?.page === false
      ? { ...link, to: undefined }
      : link);
  }

  return {
    currentPackage,
    rootNavigation,
    packageSections,
    sectionLinks,
    navigationByCategory,
    navigationByFramework,
    findSurround,
    findBreadcrumb,
  };
}
