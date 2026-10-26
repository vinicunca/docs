Read the shared brief first: /Users/praburangki/Dev/@vinicunca/docs/tasks/handoff/agent-brief.md — follow it exactly.

TASK: Revise the Windows web-dev setup guide so it's current (2026) and well structured. Assigned paths: `content/windows-dev/**`, `public/images/**` (you may add images; don't delete existing ones still referenced elsewhere — check with grep across `content/`).

Current files: `content/windows-dev/1.guide/{1.wsl,2.terminal,3.git-config,4.chocolatey,5.zsh,6.pnpm,7.vscode,8.git-commits}.md` (+ `.navigation.yml` files). Registry `to` is `/windows-dev/guide`, so `1.guide/1.index.md` (overview: who it's for, what you'll end up with, order of steps, time estimate) is required. Consider splitting into sections, e.g. `1.guide/` (overview + ordered setup steps) and `2.extras/` (git commits conventions, troubleshooting) — if you change sections, the registry `to` may need to change: report it.

Review findings to address (verify with current official docs via web search/fetch where useful):
- Reorder: Terminal → package managers (winget first, Chocolatey optional; Windows 11 24H2 `sudo`; "Terminal (Admin)") → WSL → zsh → Git (+ credential manager) → Node.js (new page: fnm or nvm inside WSL; recommend one) → pnpm (`curl -fsSL https://get.pnpm.io/install.sh | sh -`; Corepack no longer reliably bundled with recent Node) → VS Code.
- wsl: learn.microsoft.com URLs; `wsl --install` now works anytime (`-d`, `--list --online`, `--update`); `\\wsl.localhost\`; Explorer shows a Linux node (drive mapping unnecessary); add `.wslconfig` (memory, `networkingMode=mirrored`) and `/etc/wsl.conf` `[boot] systemd=true`; keep projects in the Linux filesystem for performance.
- terminal: typo "Enchance"; drop Cmder/ConEmu/Hyper; `winget install Microsoft.WindowsTerminal`; Windows 11 22H2+ default terminal; starting dir `~`/`wsl.exe -d Ubuntu --cd ~`; drop dated theme link.
- git-config: `user.username` is not a real setting (remove the false claim); GCM repo is git-ecosystem/git-credential-manager and path `/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe`; warn that `credential.helper store` saves plaintext; add `gh auth login` option; SSH key alternative; `core.autocrlf` advice.
- chocolatey: descriptions "a command line"; fences `ps`→`powershell`; Wox → PowerToys Run / Command Palette; remove tracking param from PowerToys link.
- zsh: leading space L7; `raw.githubusercontent.com` install URL; `chsh -s $(which zsh)`; mention Starship as an alternative prompt.
- vscode: "Remote - WSL" is now "WSL"; zsh profile only inside a WSL remote window; don't recommend Prettier — the Vinicunca ESLint config formats code (link `/eslint/getting-started`, settings `prettier.enable: false`, eslint code actions on save); replace stale extensions (Live Server, Git History, VetsWhoCode) with ESLint, Vue (Official), UnoCSS, Error Lens, GitLens, EditorConfig.
- git-commits: currently a verbatim copy of the Conventional Commits spec (CC BY 3.0) without attribution → replace with a short summary + examples + link to conventionalcommits.org with attribution; mention commitlint/`@vinicunca/commitlint-config` if relevant (check npm/README in /Users/praburangki/Dev/@vinicunca/taman/internal/lint-configs/commitlint-config).
- 6.pnpm.md has a ~20KB inline base64 SVG with wrong alt text → move to `public/images/` or remove.
- Replace raw `<p align="center"><img>` with Markdown images; frontmatter descriptions must be real sentences; use `::steps`, `::code-group`, `::note/::tip/::warning` where they help.
Report the final page list.
