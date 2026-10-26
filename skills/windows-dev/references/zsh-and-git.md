# Steps 4–5: zsh and Git

Run everything in the Ubuntu (WSL) terminal. Sources: https://vinicunca.dev/raw/windows-dev/guide/zsh.md and https://vinicunca.dev/raw/windows-dev/guide/git.md

## 4. zsh

```bash
sudo apt update
sudo apt install -y zsh curl unzip   # curl for installers, unzip for fnm
chsh -s $(which zsh)                 # asks for the Linux password
```

Open a new tab. On the first-run wizard (no `~/.zshrc`), press `0` to create an empty `~/.zshrc`. Confirm:

```bash
echo $SHELL   # /usr/bin/zsh
```

### Oh My Zsh

`curl | sh` installer; it backs up and rewrites `~/.zshrc`. Confirm first.

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Defaults in `~/.zshrc`: `ZSH_THEME="robbyrussell"`, `plugins=(git)`.

### Plugins

```bash
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
```

In `~/.zshrc`, keep `zsh-syntax-highlighting` last:

```bash
plugins=(git zsh-autosuggestions zsh-syntax-highlighting)
```

Reload with `exec zsh`.

### Starship (alternative prompt)

```bash
curl -sS https://starship.rs/install.sh | sh
```

Add at the end of `~/.zshrc` (with Oh My Zsh, also set `ZSH_THEME=""`):

```bash
eval "$(starship init zsh)"
```

Starship needs a Nerd Font on Windows: `winget install -e --id DEVCOM.JetBrainsMonoNerdFont`, then Terminal **Profiles › Ubuntu › Appearance › Font face**.

## 5. Git

Configure the `git` inside Ubuntu. Git for Windows is a separate install, kept only for GCM.

```bash
sudo apt update
sudo apt install -y git
git --version
```

If Git for Windows is missing (PowerShell): `winget install -e --id Git.Git`, leaving **Git Credential Manager** selected in setup.

### Identity and line endings

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"   # GitHub email or noreply address
git config --global core.autocrlf input
git config --global --list
```

There is no `user.username` setting; GitHub identity comes from authentication. For repos opened from both Windows and WSL, prefer a committed `.gitattributes` such as `* text=auto eol=lf`.

### Authentication: pick one

Never set `credential.helper store` (plain-text `~/.git-credentials`). If it is set, replace it with one of these.

**Git Credential Manager** (usual choice when Git for Windows is installed):

```bash
git config --global credential.helper "/mnt/c/Program\ Files/Git/mingw64/bin/git-credential-manager.exe"
# Windows on ARM:
git config --global credential.helper "/mnt/c/Program\ Files/Git/clangarm64/bin/git-credential-manager.exe"
# Neither exists? Find it and reuse that path:
where.exe git-credential-manager.exe
```

The next HTTPS `git clone`/`git push` opens a Windows sign-in window; tokens go to Windows Credential Manager. Azure DevOps also needs:

```bash
git config --global credential.https://dev.azure.com.useHttpPath true
```

GCM reads the Windows `%UserProfile%\.gitconfig`, not WSL's `~/.gitconfig`; GCM proxy settings belong on the Windows side.

**GitHub CLI**: install from GitHub's apt repository (Ubuntu's `gh` package lags and has shipped broken releases). Adds an apt source with `sudo`; confirm first.

```bash
(type -p wget >/dev/null || (sudo apt update && sudo apt install wget -y)) \
  && sudo mkdir -p -m 755 /etc/apt/keyrings \
  && out=$(mktemp) && wget -nv -O$out https://cli.github.com/packages/githubcli-archive-keyring.gpg \
  && cat $out | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
  && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
  && sudo mkdir -p -m 755 /etc/apt/sources.list.d \
  && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
  && sudo apt update \
  && sudo apt install gh -y
gh auth login
```

The user chooses **GitHub.com**, **HTTPS**, **Login with a web browser**, and answers yes to authenticating Git. On a `slow_down` error, they open https://github.com/login/device in the Windows browser and press Enter only after the browser finishes.

**SSH key** (for `git@github.com:` remotes; GCM and `gh` cover HTTPS only):

```bash
ssh-keygen -t ed25519 -C "you@example.com"   # accept ~/.ssh/id_ed25519, set a passphrase
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
gh ssh-key add ~/.ssh/id_ed25519.pub --title "WSL"   # or paste `cat ~/.ssh/id_ed25519.pub` at https://github.com/settings/keys
ssh -T git@github.com
```

`ssh-keygen` and the passphrase are interactive; let the user run them.
