export const AKAR_DEMO_ICONS: Record<string, string> = {
  "radix-icons:chevron-down": "i-lucide-chevron-down",
  "radix-icons:chevron-left": "i-lucide-chevron-left",
  "radix-icons:chevron-right": "i-lucide-chevron-right",
  "radix-icons:chevron-up": "i-lucide-chevron-up",
  "radix-icons:check": "i-lucide-check",
  "radix-icons:cross-2": "i-lucide-x",
  "radix-icons:row-spacing": "i-lucide-unfold-vertical",
  "radix-icons:dot-filled": "i-lucide-circle",
  "radix-icons:calendar": "i-lucide-calendar",
  "radix-icons:hamburger-menu": "i-lucide-menu",
  "radix-icons:caret-down": "i-lucide-chevron-down",
  "radix-icons:minus": "i-lucide-minus",
  "radix-icons:plus": "i-lucide-plus",
  "radix-icons:home": "i-lucide-house",
  "radix-icons:archive": "i-lucide-archive",
  "radix-icons:double-arrow-left": "i-lucide-chevrons-left",
  "radix-icons:double-arrow-right": "i-lucide-chevrons-right",
  "radix-icons:mixer-horizontal": "i-lucide-sliders-horizontal",
  "radix-icons:font-italic": "i-lucide-italic",
  "radix-icons:font-bold": "i-lucide-bold",
  "radix-icons:strikethrough": "i-lucide-strikethrough",
  "radix-icons:text-align-center": "i-lucide-align-center",
  "radix-icons:text-align-left": "i-lucide-align-left",
  "radix-icons:text-align-right": "i-lucide-align-right",
  "lucide:x": "i-lucide-x",
  "lucide:file": "i-lucide-file",
  "lucide:folder": "i-lucide-folder",
  "lucide:folder-open": "i-lucide-folder-open",
  "material-symbols:star-rounded": "i-lucide-star"
}

export function akarDemoIcon(name: string | undefined | null) {
  if (!name) return 'i-lucide-circle'
  if (AKAR_DEMO_ICONS[name]) return AKAR_DEMO_ICONS[name]
  if (name.startsWith('vscode-icons:')) return 'i-' + name.replace(':', '-')
  return name.replace(/^lucide:/, 'i-lucide-').replace(/^radix-icons:/, 'i-lucide-')
}
