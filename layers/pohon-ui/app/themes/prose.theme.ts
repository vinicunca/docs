// @unocss-include

import { BRANDS } from './constant';

export const proseTheme = {
  a: {
    base: 'text-primary font-medium border-b border-transparent transition-colors focus-visible:outline-primary hover:border-primary [&>code]:border-dashed [&>code]:transition-colors hover:[&>code]:text-primary hover:[&>code]:border-primary',
  },
  accordion: {
    slots: {
      root: 'my-5',
      trigger: 'text-base',
    },
  },
  accordionItem: {
    base: 'color-text-muted pb-4 *:my-1.5 *:first:mt-0 *:last:mb-0',
  },
  badge: {
    base: 'akar:rounded-full',
  },
  blockquote: {
    base: 'ps-4 border-s-4 border-border-accented italic',
  },
  callout: {
    slots: {
      base: 'group text-sm/6 my-5 px-4 py-3 rounded-md block transition-colors relative [&_code]:text-xs/5 [&_a]:font-700 [&_li]:my-0 [&_ol]:my-2.5 [&_ul]:my-2.5 [&>div]:my-2.5 last:mb-0 [&_ol]:ps-4.5 [&_ul]:ps-4.5 [&_code]:bg-background [&_pre]:bg-background [&>*]:last:!mb-0',
      externalIcon: 'align-top size-4 pointer-events-none transition-colors right-2 top-2 absolute',
      icon: 'me-1.5 align-sub shrink-0 size-4 transition-colors',
    },
    variants: {
      color: {
        ...Object.fromEntries(BRANDS.map((color) => [
          color,
          {
            base: `border border-${color}/25 bg-${color}/10 color-${color}-600 dark:color-${color}-300 [&_a]:color-${color} [&_a]:hover:border-${color} [&_code]:color-${color}-600 dark:[&_code]:color-${color}-300 [&_code]:border-${color}/25 [&_a]:hover:[&>code]:border-${color} [&_a]:hover:[&>code]:color-${color} [&>ul]:marker:color-${color}/50`,
            icon: `color-${color}`,
            externalIcon: `color-${color}-600 dark:color-${color}-300`,
          },
        ])),
        neutral: {
          base: 'color-text border border-border-muted bg-background-muted',
          icon: 'color-text-highlighted',
          externalIcon: 'color-text-dimmed',
        },
      },
      to: {
        true: 'border-dashed',
      },
    },
    compoundVariants: [
      ...BRANDS.map((color) => ({
        color,
        to: true,
        class: {
          base: `hover:border-${color}`,
          externalIcon: `group-hover:text-${color}`,
        },
      })),
      {
        color: 'neutral',
        to: true,
        class: {
          base: 'hover:border-border-inverted',
          externalIcon: 'group-hover:color-text-highlighted',
        },
      },
    ],
  },
  card: {
    slots: {
      base: 'group my-5 p-4 border border-border rounded-md bg-background block transition-colors-280 relative sm:p-6',
      icon: 'mb-2 size-6 block',
      title: 'color-text-highlighted font-semibold',
      description: 'text-[15px] color-text-muted *:my-1 *:first:mt-0 *:last:mb-0',
      externalIcon: 'color-text-dimmed align-top size-4 pointer-events-none transition-colors-280 right-2 top-2 absolute',
    },
    variants: {
      color: {
        ...Object.fromEntries(BRANDS.map((color) => [
          color,
          {
            icon: `color-${color}`,
          },
        ])),
        neutral: {
          icon: 'color-text-highlighted',
        },
      },
      to: {
        true: '',
      },
      title: {
        true: {
          description: 'mt-1',
        },
      },
    },
    compoundVariants: [
      ...BRANDS.map((color) => ({
        color,
        to: true,
        class: {
          base: `hover:bg-${color}/10 hover:border-${color}`,
          externalIcon: `group-hover:color-${color}`,
        },
      })),
      {
        color: 'neutral',
        to: true,
        class: {
          base: 'hover:bg-background-elevated/50 hover:border-border-inverted',
          externalIcon: 'group-hover:color-text-highlighted',
        },
      },
    ],
  },
  cardGroup: {
    base: 'my-5 gap-5 grid grid-cols-1 sm:grid-cols-2 akar:*:my-0',
  },
  code: {
    base: 'text-sm font-600 font-mono px-1.5 py-0.5 rounded-md inline-block transition-colors-280 [&[language=ts-type]]:(bg-slate-700 dark:bg-slate-800)',
    variants: {
      color: {
        ...Object.fromEntries(BRANDS.map((color) => [
          color,
          `border border-${color}/25 bg-${color}/10 color-${color}`,
        ])),
        neutral: 'color-text-highlighted border border-border-muted bg-background-muted',
      },
    },
  },
  codeGroup: {
    slots: {
      root: 'group my-5 relative *:not-first:!my-0 *:not-first:!static',
      list: 'p-2 border border-b-0 border-border-muted rounded-t-md bg-background flex gap-1 items-center relative overflow-x-auto',
      indicator: 'rounded-md bg-background-elevated w-$akar-tabs-indicator-size shadow-xs translate-x-$akar-tabs-indicator-position transition-[transform,width]-200 inset-y-2 left-0 absolute',
      trigger: 'text-sm color-text px-2 py-1.5 rounded-md inline-flex gap-1.5 transition-colors items-center relative data-[state=active]:color-text-highlighted focus:outline-none hover:bg-background-elevated/50 disabled:(opacity-75 cursor-not-allowed) focus-visible:(ring-2 ring-primary ring-inset)',
      triggerIcon: 'shrink-0 size-4',
      triggerLabel: 'truncate',
    },
  },
  codeCollapse: {
    slots: {
      root: 'relative [&_pre]:(border border-border-muted rounded-b-md h-[200px])',
      footer: 'rounded-b-md flex h-16 items-center inset-x-px bottom-px justify-center absolute',
      trigger: 'group',
      triggerIcon: 'group-data-[state=open]:rotate-180',
    },
    variants: {
      open: {
        true: {
          root: '[&_pre]:pb-12 [&_pre]:h-auto [&_pre]:max-h-[80vh] [&_pre]:min-h-[200px]',
        },
        false: {
          root: '[&_pre]:overflow-hidden',
          footer: 'from-slate-800 bg-gradient-to-t',
        },
      },
    },
  },
  codePreview: {
    slots: {
      root: 'my-5',
      preview: 'p-4 border border-border-muted rounded-md flex justify-center relative',
      code: '[&>div]:my-0 [&>div>pre]:rounded-t-none',
    },
    variants: {
      code: {
        true: {
          preview: 'border-b-0 rounded-b-none',
        },
      },
    },
  },
  codeTree: {
    slots: {
      root: 'my-5 border border-border-muted rounded-md grid relative lg:grid-cols-3 lg:h-[450px]',
      list: 'p-2 border-b border-border-muted relative overflow-y-auto isolate lg:border-b-0 lg:border-e',
      item: '',
      listWithChildren: 'ms-4.5 border-s border-border',
      itemWithChildren: 'ps-1.5 -ms-px',
      link: 'group peer text-sm px-2.5 py-1.5 flex gap-1.5 w-full items-center relative focus-visible:outline-none focus:outline-none before:(rounded-md content-empty inset-x-0 inset-y-px absolute -z-1) focus-visible:before:ring-2 focus-visible:before:ring-inset',
      linkLeadingIcon: 'shrink-0 size-4',
      linkLabel: 'truncate',
      linkTrailing: 'ms-auto inline-flex gap-1.5 items-center',
      linkTrailingIcon: 'shrink-0 size-5 transform transition-transform-280 group-data-[expanded]:rotate-180',
      content: 'flex flex-col overflow-hidden [&>div]:my-0 [&>div>div]:border-0 [&>div>pre]:border-b-0 [&>div>pre]:border-e-0 [&>div>pre]:border-s-0 [&>div>pre]:rounded-l-none [&>div]:flex [&>div]:flex-1 [&>div>pre]:flex-1 [&>div]:flex-col lg:col-span-2 [&>div]:overflow-y-auto',
    },
    variants: {
      active: {
        true: {
          link: 'color-text-highlighted before:bg-background-elevated',
        },
        false: {
          link: 'transition-colors-280 hover:color-text-highlighted before:transition-colors-280 hover:before:bg-background-elevated/50',
        },
      },
    },
  },
  collapsible: {
    slots: {
      content: '*:my-1.5 *:first:mt-2.5 *:last:mb-0',
      root: 'my-5',
      trigger: 'group text-sm color-text-muted rounded-xs inline-flex gap-1.5 transition-colors-280 items-center relative hover:color-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary',
      triggerIcon: 'shrink-0 size-4 transition-transform-200 group-data-[state=open]:rotate-180',
      triggerLabel: 'truncate',
    },
  },
  fieldGroup: {
    base: 'my-5 divide-divide divide-y *:not-last:pb-5',
  },
  field: {
    slots: {
      root: 'my-5',
      container: 'text-sm font-mono flex gap-3 items-center',
      name: 'color-primary font-semibold',
      wrapper: 'text-xs flex flex-1 gap-1.5 items-center',
      required: 'color-error px-1.5 py-0.5 rounded-sm bg-error/10',
      type: 'color-text-toned px-1.5 py-0.5 rounded-sm bg-background-elevated',
      description: 'text-sm color-text-muted mt-3 [&_code]:text-xs/4',
    },
  },
  h1: {
    base: 'colortext-highlighted text-4xl font-bold mb-8 scroll-mt-[calc(45px+var(--pohon-header-height))] lg:scroll-mt-$pohon-header-height',
    link: 'inline-flex gap-2 items-center',
  },
  h2: {
    slots: {
      base: 'text-2xl color-text-highlighted font-bold mb-6 mt-12 relative scroll-mt-[calc(48px+45px+var(--pohon-header-height))] [&>a>code]:text-xl/7 [&>a>code]:font-bold [&>a:focus-visible]:outline-primary [&>a>code]:border-dashed [&>a>code]:transition-colors lg:scroll-mt-[calc(48px+var(--pohon-header-height))] hover:[&>a>code]:color-primary hover:[&>a>code]:border-primary',
      leading: 'color-text-muted p-1 rounded-md bg-background-elevated opacity-0 hidden transition top-1 absolute hover:color-primary -ms-8 group-focus:opacity-100 group-hover:opacity-100 lg:flex',
      leadingIcon: 'shrink-0 size-4',
      link: 'group lg:ps-2 lg:-ms-2',
    },
  },
  h3: {
    slots: {
      base: 'text-xl color-text-highlighted font-bold mb-3 mt-8 relative scroll-mt-[calc(32px+45px+var(--pohon-header-height))] [&>a>code]:text-lg/6 [&>a>code]:font-bold [&>a:focus-visible]:outline-primary [&>a>code]:border-dashed [&>a>code]:transition-colors lg:scroll-mt-[calc(32px+var(--pohon-header-height))] hover:[&>a>code]:text-primary hover:[&>a>code]:border-primary',
      leading: 'color-text-muted p-1 rounded-md bg-background-elevated opacity-0 hidden transition top-0.5 absolute hover:text-primary -ms-8 group-focus:opacity-100 group-hover:opacity-100 lg:flex',
      leadingIcon: 'shrink-0 size-4',
      link: 'group lg:(ps-2 -ms-2)',
    },
  },
  h4: {
    slots: {
      base: 'text-lg color-text-highlighted font-bold mb-2 mt-6 scroll-mt-[calc(24px+45px+var(--pohon-header-height))] [&>a:focus-visible]:outline-primary lg:scroll-mt-[calc(24px+var(--pohon-header-height))]',
    },
  },
  hr: {
    base: 'border-default my-12 border-t',
  },
  icon: {
    base: 'align-sub shrink-0 size-4',
  },
  img: {
    slots: {
      base: 'rounded-md w-full',
      overlay: 'will-change-opacity bg-background/75 inset-0 fixed backdrop-blur-sm',
      content: 'flex cursor-zoom-out items-center inset-0 justify-center fixed focus:outline-none',
      zoomedImage: 'rounded-md h-auto max-h-[95vh] max-w-[95vw] w-full object-contain',
    },
    variants: {
      zoom: {
        true: 'will-change-transform',
      },
    },
    compoundVariants: [{
      zoom: true,
      open: false,
      class: 'cursor-zoom-in',
    }],
  },
  kbd: {
    base: 'align-text-top',
  },
  li: {
    base: 'leading-7 my-1.5 ps-1.5 [&>ul]:my-0',
  },
  ol: {
    base: 'my-5 ps-6 list-decimal marker:color-text-muted',
  },
  p: {
    base: 'leading-7 my-5 text-pretty',
  },
  pre: {
    slots: {
      root: 'group relative',
      base: 'group text-sm/6 font-mono px-4 py-3 rounded-md bg-slate-800 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none',
      copy: 'color-neutral-200 transition right-[11px] top-[11px] absolute lg:opacity-0 lg:group-hover:opacity-100',
      filename: 'text-sm/6 color-text',
      header: 'px-4 py-3 border border-b-0 border-border-muted rounded-t-md bg-background flex gap-1.5 items-center relative',
      icon: 'shrink-0 size-4',
    },
    variants: {
      filename: {
        true: {
          root: 'my-5 [&>pre]:my-0 [&>pre]:rounded-t-none',
        },
      },
    },
  },
  steps: {
    base: 'ms-4 ps-8 border-s border-border [counter-reset:step]',
    variants: {
      level: {
        2: '[&>h2>a>span.absolute]:hidden [&>h2]:[counter-increment:step] [&>h2]:relative [&>h2]:before:(text-sm font-semibold rounded-full bg-background-elevated inline-flex size-8 content-[counter(step)] ring-4 ring-ring-bg items-center justify-center absolute tabular-nums -ms-[48.5px] -mt-0)',
        3: '[&>h3>a>span.absolute]:hidden [&>h3]:[counter-increment:step] [&>h3]:relative [&>h3]:before:(text-sm font-semibold rounded-full bg-background-elevated inline-flex size-7 content-[counter(step)] ring-4 ring-ring-bg items-center inset-x-0.5 justify-center absolute tabular-nums -ms-[48.5px])',
        4: '[&>h4>a>span.absolute]:hidden [&>h4]:[counter-increment:step] [&>h4]:relative [&>h4]:before:(text-sm font-semibold rounded-full bg-background-elevated inline-flex size-7 content-[counter(step)] ring-4 ring-ring-bg items-center inset-x-0.5 justify-center absolute tabular-nums -ms-[48.5px])',
      },
    },
  },
  table: {
    slots: {
      base: 'rounded-md w-full border-separate border-spacing-0',
      root: 'my-5 relative overflow-x-auto',
    },
  },
  tabs: {
    slots: {
      root: 'my-5 gap-4',
    },
  },
  tabsItem: {
    base: '*:my-1.5 *:first:mt-0 *:last:mb-0',
  },
  td: {
    base: 'text-sm px-4 py-3 text-left border-b border-e border-border-muted [&_code]:text-xs/5 [&_li]:leading-6 [&_p]:leading-6 [&_li]:my-0.5 [&_ol]:my-0 [&_p]:my-0 [&_ul]:my-0 [&_ol]:ps-4.5 [&_ul]:ps-4.5 first:border-s',
  },
  th: {
    base: 'text-sm font-semibold px-4 py-3 text-left border-b border-e border-t border-border-muted first:border-s',
  },
  thead: {
    base: 'bg-background-muted',
  },
  tr: {
    base: '[&:first-child>th:first-child]:rounded-tl-md [&:first-child>th:last-child]:rounded-tr-md [&:last-child>td:first-child]:rounded-bl-md [&:last-child>td:last-child]:rounded-br-md',
  },
  ul: {
    base: 'my-5 ps-6 list-disc marker:color-border-accented',
  },
};
