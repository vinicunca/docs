# Step 8: VS Code connected to WSL

Source: https://vinicunca.dev/raw/windows-dev/guide/vscode.md

The VS Code UI runs on Windows; the WSL extension runs a server inside Ubuntu so the terminal, language tools and file watchers use Linux Git, Node and pnpm.

## Install

PowerShell, no admin needed. Use Stable, not Insiders, unless the user wants the daily build.

```powershell
winget install --id Microsoft.VisualStudioCode -e
```

## Connect to WSL

1. In Windows VS Code, install **WSL** (`ms-vscode-remote.remote-wsl`, formerly "Remote - WSL").
2. From the Ubuntu terminal:

   ```bash
   cd ~/code/my-project
   code .
   ```

   The first run downloads the VS Code Server. The status bar should read **WSL: Ubuntu**; `code` is then on the Linux `PATH`. Alternative: F1 → **WSL: Connect to WSL**.

## Default terminal profile

Only once the window shows **WSL: Ubuntu** (a Windows-local window has no zsh profile): Ctrl + Shift + P → **Terminal: Select Default Profile** → **zsh**.

## ESLint, not Prettier

Vinicunca projects lint and format with `@vinicunca/eslint-config`. Remove the Prettier extension if present; it fights ESLint Stylistic on save. Install ESLint in the WSL window, then in the workspace `.vscode/settings.json` (or the WSL user settings):

```jsonc
{
  "prettier.enable": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never"
  }
}
```

Copy the full `eslint.rules.customizations` and `eslint.validate` lists from https://vinicunca.dev/raw/eslint/getting-started.md (VS Code section).

## Extensions

Language-tool extensions go in the WSL window (**WSL: Ubuntu – Installed**); themes and icons can stay on Windows. The WSL extension itself installs on Windows.

| Extension | ID |
| --- | --- |
| ESLint | `dbaeumer.vscode-eslint` |
| Vue (Official) | `Vue.volar` |
| UnoCSS | `antfu.unocss` |
| Error Lens | `usernamehw.errorlens` |
| GitLens | `eamodio.gitlens` |
| EditorConfig | `EditorConfig.EditorConfig` |

From an Ubuntu terminal while a WSL window is open:

```bash
code --install-extension dbaeumer.vscode-eslint
code --install-extension Vue.volar
code --install-extension antfu.unocss
code --install-extension usernamehw.errorlens
code --install-extension eamodio.gitlens
code --install-extension EditorConfig.EditorConfig
```

Leave out Prettier, Live Server, Git History and extension packs: Vite/Nuxt provide the dev server, GitLens covers history, ESLint covers formatting.
