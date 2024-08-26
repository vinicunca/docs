export const eslintSidebar = [
  {
    collapsed: false,
    items: [
      { link: '/eslint/user-guide/installation', text: 'Installation' },
    ],
    text: 'User Guide',

  },
  {
    collapsed: false,
    items: [
      generateConfigSidelink({ icon: 'i-logos:astro-icon', link: 'astro', text: 'Astro' }),
      generateConfigSidelink({ icon: 'i-fa-regular:comments', link: 'comments', text: 'Comments' }),
      generateConfigSidelink({ icon: 'i-ph:command', link: 'command', text: 'Command' }),
      generateConfigSidelink({ icon: 'i-ic:baseline-format-indent-increase', link: 'formatters', text: 'Formatter' }),
      generateConfigSidelink({ icon: 'i-simple-icons:eslint', link: 'ignores', text: 'Ignores' }),
      generateConfigSidelink({ icon: 'i-carbon:document-import', link: 'imports', text: 'Imports' }),
      generateConfigSidelink({ icon: 'i-logos:javascript', link: 'javascript', text: 'Javascript' }),
      generateConfigSidelink({ icon: 'i-simple-line-icons:docs', link: 'jsdoc', text: 'JSDoc' }),
      generateConfigSidelink({ icon: 'i-carbon:json', link: 'jsonc', text: 'JSONC' }),
      generateConfigSidelink({ icon: 'i-simple-icons:markdown', link: 'markdown', text: 'Markdown' }),
      generateConfigSidelink({ icon: 'i-logos:nodejs-icon-alt', link: 'node', text: 'NodeJS' }),
      generateConfigSidelink({ icon: 'i-vin:eslint-perfectionist', link: 'perfectionist', text: 'Perfectionist' }),
      generateConfigSidelink({ icon: 'i-logos:react', link: 'react', text: 'React' }),
      generateConfigSidelink({ icon: 'i-bi:regex', link: 'regexp', text: 'Regexp' }),
      generateConfigSidelink({ icon: 'i-logos:solid', link: 'solid', text: 'Solid' }),
      generateConfigSidelink({ icon: 'i-simple-icons:sonar', link: 'sonar', text: 'Sonar' }),
      generateConfigSidelink({ icon: 'i-logos:nodejs-icon', link: 'sort-package-json', text: 'Sort package.json' }),
      generateConfigSidelink({ icon: 'i-vscode-icons:file-type-tsconfig', link: 'sort-tsconfig', text: 'Sort tsconfig' }),
      generateConfigSidelink({ icon: 'i-vin:eslint-style', link: 'stylistic', text: 'Stylistic' }),
      generateConfigSidelink({ icon: 'i-logos:svelte-icon', link: 'svelte', text: 'Svelte' }),
      generateConfigSidelink({ icon: 'i-file-icons:test-generic', link: 'test', text: 'Test' }),
      generateConfigSidelink({ icon: 'i-logos:toml', link: 'toml', text: 'TOML' }),
      generateConfigSidelink({ icon: 'i-logos:typescript-icon', link: 'typescript', text: 'Typescript' }),
      generateConfigSidelink({ icon: 'i-openmoji:unicorn', link: 'unicorn', text: 'Unicorn' }),
      generateConfigSidelink({ icon: 'i-logos:vue', link: 'vue', text: 'Vue' }),
      generateConfigSidelink({ icon: 'i-vin:yaml', link: 'yaml', text: 'YAML' }),
    ],
    text: 'Configs',
  },
];

interface ConfigSideLink {
  icon: string;
  link: string;
  text: string;
}

function generateConfigSidelink(options: ConfigSideLink) {
  return {
    link: `/eslint/configs/${options.link}`,
    text: `<i class="${options.icon}"></i> ${options.text}`,
  };
}
