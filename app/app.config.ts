import { defineAppConfig } from '#imports';

export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    max: 5,
    expand: true,
    disableSwipe: false,
    duration: 5000,
  },

  pohon: {
    colors: {
      primary: 'green',
    },
  },
});
