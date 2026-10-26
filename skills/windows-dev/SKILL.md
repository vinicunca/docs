---
name: windows-dev
description: Set up or troubleshoot a Windows machine for web development the Vinicunca way — WSL 2 + Ubuntu, Windows Terminal, WinGet, zsh, Git auth, Node.js via fnm, pnpm, VS Code. Use when setting up Windows for development, installing or configuring WSL, Windows Terminal, or git/node/pnpm on Windows, or fixing Windows dev problems (WSL won't start, localhost, slow installs, `code` missing, Git password prompts).
---

# Windows Dev Setup (Vinicunca)

The team's Windows guide distilled. Source of truth: https://vinicunca.dev/raw/windows-dev/guide.md (overview) and the per-page links below. Fetch the raw page when you need wording or screenshots this skill leaves out.

## The one rule: Linux does the work

Code, shell, Git, Node, pnpm and projects all live **inside WSL (Ubuntu)**. Windows keeps only the UI apps: Windows Terminal, VS Code, browsers, Git for Windows (for its credential manager). There is no "native Windows" track in the guide; when a teammate has a native setup, steer them to WSL.

| Tool | Install on | Notes |
| --- | --- | --- |
| Windows Terminal, VS Code, PowerToys, Git for Windows | Windows (WinGet) | Git for Windows is only there to provide Git Credential Manager (GCM) |
| zsh, Git, fnm, Node.js, pnpm | WSL (Ubuntu) | Never the Windows Node installer, never WinGet's pnpm, never Corepack |
| VS Code extensions: ESLint, Vue, UnoCSS | WSL window ("WSL: Ubuntu – Installed") | Themes/icons can stay on Windows; the WSL extension itself installs on Windows |
| Projects | `~/code` in the Linux filesystem | Never under `/mnt/c` (slow I/O, Vite/Nuxt watchers miss changes) |

Know which shell a command belongs to. PowerShell commands (`winget`, `wsl ...`, `choco`) run on Windows; `bash`/`zsh` blocks run in the Ubuntu tab. Inside WSL, `$WSL_DISTRO_NAME` is set.

## Guardrails: ask before you change the system

Tell the user what a command does and get a go-ahead before running anything that is elevated, system-wide, or destructive. That covers:

- Anything needing **Terminal (Admin)** or `sudo` (`wsl --install`, `choco` installs, `apt upgrade`, edits to `/etc/wsl.conf`).
- Commands that reboot, stop, or uninstall: `wsl --shutdown` (kills every running distro and dev server), Windows restarts, `winget uninstall`, `fnm uninstall`.
- `curl ... | sh` installers (Oh My Zsh, fnm, pnpm, Starship) and `Set-ExecutionPolicy`.
- Deleting state, such as `rm -rf ~/.vscode-server`, or overwriting `~/.zshrc` / `.wslconfig`.

Elevate only when an installer asks for it. Run the WSL shell, `pnpm`, `npm` and the pnpm installer as the normal user, without `sudo` or admin. Many steps are GUI-only (Windows Terminal settings, VS Code profile picker); walk the user through those instead of guessing.

## Setup order

Each step assumes the previous ones are done. Plan for 45–60 minutes and one reboot. Requirements: Windows 11 (or Windows 10 22H2), virtualization enabled in firmware, admin rights. `sudo` for Windows needs Windows 11 24H2; mirrored networking needs Windows 11 22H2 (check with `winver`).

| # | Step | Shell | Key commands | Detail |
| --- | --- | --- | --- | --- |
| 1 | Windows Terminal: install, make default | PowerShell | `winget install --id Microsoft.WindowsTerminal -e` (Win 10 only) | [windows.md](references/windows.md) |
| 2 | Admin shell + WinGet (Chocolatey optional) | PowerShell | `winget --version`, `winget install -e --id Git.Git` | [windows.md](references/windows.md) |
| 3 | WSL 2 + Ubuntu, `.wslconfig`, systemd, `~/code` | Admin PowerShell, then Ubuntu | `wsl --install`, reboot, `sudo apt update && sudo apt upgrade -y` | [wsl.md](references/wsl.md) |
| 3b | Terminal opens Ubuntu in `~` | GUI | Default profile **Ubuntu**, starting directory `~` | [windows.md](references/windows.md) |
| 4 | zsh + Oh My Zsh + plugins | Ubuntu | `sudo apt install -y zsh curl unzip`, `chsh -s $(which zsh)` | [zsh-and-git.md](references/zsh-and-git.md) |
| 5 | Git identity, line endings, auth | Ubuntu | `git config --global core.autocrlf input`, GCM helper | [zsh-and-git.md](references/zsh-and-git.md) |
| 6 | Node.js LTS via fnm | Ubuntu | `curl -fsSL https://fnm.vercel.app/install \| bash`, `fnm install --lts --use` | [node-and-pnpm.md](references/node-and-pnpm.md) |
| 7 | pnpm standalone | Ubuntu | `curl -fsSL https://get.pnpm.io/install.sh \| sh -` | [node-and-pnpm.md](references/node-and-pnpm.md) |
| 8 | VS Code + WSL extension + ESLint | PowerShell, then Ubuntu | `winget install --id Microsoft.VisualStudioCode -e`, `code .` | [vscode.md](references/vscode.md) |

Load the detail file for the step you are on before running its commands; it holds the exact command blocks and config snippets.

## Audit an existing machine

Before installing anything, check what is already there and start from the first step that fails:

```powershell
# PowerShell
winget --version
wsl --version
wsl --list --verbose        # Ubuntu present, VERSION 2
```

```bash
# Ubuntu
echo $SHELL                 # /usr/bin/zsh
git config --global --list  # user.name, user.email, core.autocrlf=input, credential.helper
fnm --version && node -v && npm -v
pnpm --version
which node pnpm             # paths under your Linux home, not /mnt/c/...
pwd                         # projects under ~/code, not /mnt/c
```

Red flags to fix: Node or pnpm resolving to a Windows path, `credential.helper` set to `store`, projects under `/mnt/c`, Prettier installed in VS Code, `.wslconfig` missing on a machine with RAM or localhost issues.

## Decision points

- **WSL already installed?** `wsl --install` may only print help. Use `wsl --list --online`, then `wsl --install -d Ubuntu-24.04`.
- **Mirrored networking?** Windows 11 22H2+: set `networkingMode=mirrored` in `.wslconfig`. Older builds: leave it out; NAT still forwards `localhost`.
- **Git auth:** GCM if Git for Windows is installed (the usual choice); GitHub CLI (`gh auth login`) as an alternative; SSH key for `git@github.com:` remotes. Never `credential.helper store`.
- **Prompt:** Oh My Zsh with `robbyrussell` by default; Starship is the alternative (set `ZSH_THEME=""` if combining, and install a Nerd Font on Windows).
- **Node version:** let fnm pick current LTS (`lts-latest`); a repo's `.node-version` / `.nvmrc` overrides on `cd`. Uninstall the Windows Node installer if present.
- **pnpm version:** latest by default; pin a major only when a project needs it (`PNPM_VERSION=10`).

## Commit conventions

Vinicunca repos use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/): `<type>[scope][!]: <description>`.

- `feat` → minor, `fix` → patch, `!` or a `BREAKING CHANGE:` footer → major. `docs`, `refactor`, `test`, `chore` carry no version bump.
- `@vinicunca/commitlint-config` extends `@commitlint/config-conventional`: scopes are workspace package names (`@vinicunca/foo` or `foo`) plus `project`, `style`, `lint`, `ci`, `dev`, `deploy`, `other`; extra types `types` and `release`; header capped at 108 characters.
- If the repo has `pnpm commit` (cz-git / `czg`), use it instead of a free-form `git commit`.

Examples: `fix(wsl): keep projects off /mnt/c`, `feat(api)!: remove legacy v1 routes`. Full page: https://vinicunca.dev/raw/windows-dev/extras/git-commits.md

## Troubleshooting

After any change to `.wslconfig` or `/etc/wsl.conf`, run `wsl --shutdown` in PowerShell (confirm first) and open a new Ubuntu tab. Full page: https://vinicunca.dev/raw/windows-dev/extras/troubleshooting.md

| Symptom | Likely cause | Fix |
| --- | --- | --- |
| WSL won't install or start | Virtualization off, or WSL outdated | Task Manager → Performance → CPU shows **Virtualization: Enabled**; `wsl --update`, then `wsl --version` |
| `wsl --install` only prints help | WSL already present | `wsl --list --online`, `wsl --install -d Ubuntu-24.04` |
| "The virtual machine could not be started" after a Windows update | Stale VM state | `wsl --shutdown`, reboot Windows, `wsl --update` |
| `localhost` doesn't reach the dev server | No mirrored networking, VPN/IPv6, wrong bind address | Bind the app to `0.0.0.0` or `localhost`; add `networkingMode=mirrored` (22H2+), `wsl --shutdown`; `wsl hostname -I` gives the distro IP |
| Installs slow, Vite/Nuxt miss file changes | Project under `/mnt/c` | Move it to `~/code` |
| `code: command not found` | WSL extension or server missing | Install the WSL extension in Windows VS Code, run `code .` from Ubuntu; else **WSL: Connect to WSL** (F1) |
| Stuck "Installing VS Code Server" | Broken server download | `rm -rf ~/.vscode-server` (confirm first), then `code .` |
| Git asks for a password every time, or helper is `store` | GCM not wired up | Set `credential.helper` to the GCM `.exe` path; check with `where.exe git-credential-manager.exe` |
| TLS errors, `gh auth` fails | Clock drift after sleep | `sudo hwclock -s`, or install `systemd-timesyncd` and `sudo timedatectl set-ntp true` |
| `gh auth login` errors with `slow_down` | Device-flow polling | Open https://github.com/login/device in the Windows browser yourself; press Enter only after the browser finishes |
| DNS or `apt update` fails on VPN | Resolver not following Windows | Use mirrored networking; see the troubleshooting page and Microsoft's WSL troubleshooting for VPN workarounds |
| Ubuntu uses too much RAM | No cap in `.wslconfig` | `memory=8GB` (on 16 GB) under `[wsl2]`, then `wsl --shutdown` |
| `ERR_PNPM_SUDO_NOT_SUPPORTED` | pnpm run as root | Run pnpm as the normal user; reinstall without `sudo` if needed |
| Prettier and ESLint fight on save | Prettier extension installed | Uninstall Prettier; use the ESLint settings in [vscode.md](references/vscode.md) |

## Doc pages

| Page | Raw URL |
| --- | --- |
| Overview | https://vinicunca.dev/raw/windows-dev/guide.md |
| Windows Terminal | https://vinicunca.dev/raw/windows-dev/guide/terminal.md |
| Package managers | https://vinicunca.dev/raw/windows-dev/guide/package-managers.md |
| WSL | https://vinicunca.dev/raw/windows-dev/guide/wsl.md |
| zsh | https://vinicunca.dev/raw/windows-dev/guide/zsh.md |
| Git | https://vinicunca.dev/raw/windows-dev/guide/git.md |
| Node.js | https://vinicunca.dev/raw/windows-dev/guide/nodejs.md |
| pnpm | https://vinicunca.dev/raw/windows-dev/guide/pnpm.md |
| VS Code | https://vinicunca.dev/raw/windows-dev/guide/vscode.md |
| Extras | https://vinicunca.dev/raw/windows-dev/extras.md |
| Commit messages | https://vinicunca.dev/raw/windows-dev/extras/git-commits.md |
| Troubleshooting | https://vinicunca.dev/raw/windows-dev/extras/troubleshooting.md |
