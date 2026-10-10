# Windows side: Terminal and package managers

Steps 1, 2 and 3b. Run these in PowerShell on Windows. Sources: https://vinicunca.dev/raw/windows-dev/guide/terminal.md and https://vinicunca.dev/raw/windows-dev/guide/package-managers.md

## 1. Windows Terminal

Windows 11 ships it (updated through the Microsoft Store). On Windows 10, or if it was removed:

```powershell
winget install --id Microsoft.WindowsTerminal -e
```

GitHub release builds don't auto-update; prefer WinGet or the Store.

**Make it the default terminal** (already the default on Windows 11 22H2+): Ctrl + , → **Startup** → **Default terminal application** = **Windows Terminal** → **Save**.

## 2. Administrator shell

Pick one; confirm with the user before elevating:

- **Terminal (Admin):** Win + X → **Terminal (Admin)**, accept UAC. The tab title starts with **Administrator:**.
- **sudo for Windows** (Windows 11 24H2+): enable in **Settings › System › Advanced › Enable sudo**, then prefix a command, e.g. `sudo winget install --id Git.Git -e`. Keep the default **In a new window** mode; inline modes let other processes in the console drive the elevated one.
- **Always-elevated profile:** Terminal **Settings › Profiles › Windows PowerShell › Run this profile as Administrator**. Keep the everyday Ubuntu profile unelevated.

Elevate only when an installer asks for it.

## 2. WinGet

```powershell
winget --version                                   # missing? update App Installer from the Microsoft Store
winget search vscode                               # find an ID
winget install --id Microsoft.VisualStudioCode -e  # install by exact ID
winget list
winget upgrade
winget upgrade --all
winget uninstall --id Microsoft.VisualStudioCode -e
```

Always use `--id` with `-e` (`--exact`) so a similarly named package isn't installed by accident.

## 2. Chocolatey (optional)

Install only if WinGet lacks something. From an admin PowerShell:

```powershell
Get-ExecutionPolicy
# If Restricted, allow scripts for this session only:
Set-ExecutionPolicy Bypass -Scope Process
```

Installer (offer the user https://community.chocolatey.org/install.ps1 to review first):

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

Verify in a new admin tab with `choco -?`. Everyday commands (admin shell): `choco install <package> -y`, `choco upgrade <package>`, `choco upgrade all -y`, `choco list`, `choco uninstall <package>`.

## Recommended apps

Git for Windows is required (it provides GCM for the Git step). The rest are optional; ask which ones the user wants.

```powershell
winget install -e --id Microsoft.PowerToys
winget install -e --id Git.Git
winget install -e --id GitHub.GitHubDesktop
winget install -e --id lukehaas.RunJS
winget install -e --id Bruno.Bruno
winget install -e --id Postman.Postman
winget install -e --id Figma.Figma
winget install -e --id JGraph.Draw
winget install -e --id Obsidian.Obsidian
winget install -e --id Notion.Notion
```

Chocolatey equivalent: `choco install powertoys git github-desktop runjs postman figma drawio obsidian notion -y`.

## 3b. Open Ubuntu by default (after WSL is installed)

Windows Terminal adds an **Ubuntu** profile automatically once the distro exists.

1. **Startup › Default profile** = **Ubuntu**.
2. **Profiles › Ubuntu › General › Starting directory** = `~`. If the version rejects `~`, leave it empty and set **Command line** to `wsl.exe -d Ubuntu --cd ~`.

New tabs then open in `/home/<user>` instead of `/mnt/c/Users/<you>`.

Shortcuts: new tab Ctrl + Shift + T; command palette Ctrl + Shift + P; split pane Alt + Shift + D; open `settings.json` by holding Shift while selecting **Settings**.
