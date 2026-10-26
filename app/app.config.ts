// @unocss-include

export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    duration: 5000,
    max: 5,
    expand: true,
  },
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate',
    },

    prose: {
      cardGroup: {
        base: 'pohon:*:my-0',
      },
    },
  },
});
