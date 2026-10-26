# Steps 6–7: Node.js (fnm) and pnpm

Run in the Ubuntu (WSL) terminal. Requires `curl` and `unzip` (installed in the zsh step). Sources: https://vinicunca.dev/raw/windows-dev/guide/nodejs.md and https://vinicunca.dev/raw/windows-dev/guide/pnpm.md

## 6. Node.js via fnm

Install Node **inside WSL**. If the Windows Node installer is present, it causes wrong binaries, CRLF scripts and native-addon mismatches; offer to remove it (PowerShell, confirm first): `winget uninstall -e --id OpenJS.NodeJS.LTS`.

```bash
curl -fsSL https://fnm.vercel.app/install | bash
```

The installer puts fnm in `~/.local/share/fnm` and appends a loader to `~/.zshrc`. Replace that loader with this one, which switches Node on `cd`:

```bash
# fnm
export PATH="$HOME/.local/share/fnm:$PATH"
eval "$(fnm env --use-on-cd --shell zsh)"
```

```bash
source ~/.zshrc
fnm --version
fnm install --lts --use
fnm default lts-latest
node -v
npm -v
```

`fnm install --lts` aliases the version as `lts-latest`; `fnm default lts-latest` is what new shells use when a project doesn't specify one. Don't pin a patch version.

Everyday:

```bash
fnm ls                  # installed versions
fnm ls-remote --lts     # available LTS releases
fnm install 22          # another major
fnm use 24              # this shell only
fnm default 24          # new shells
fnm uninstall 22
echo 24 > .node-version # per-repo version, picked up by --use-on-cd
```

fnm also honors `.nvmrc` and `package.json` `engines`, so READMEs that say `nvm use` still work. Use fnm rather than nvm (a sourced shell script, slower startup).

## 7. pnpm (standalone)

Install with the standalone script, as the normal user, never with `sudo`. Corepack is out: Node 25+ doesn't ship it, and on Node 24 it's experimental. `npm i -g pnpm` ties pnpm to the fnm-selected Node; WinGet's Windows pnpm is the wrong side (and Defender has quarantined it).

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

It unpacks to `~/.local/share/pnpm` and appends to `~/.zshrc`. Open a new tab (or `source ~/.zshrc`):

```bash
pnpm --version
```

Pin a major only if needed:

```bash
curl -fsSL https://get.pnpm.io/install.sh | env PNPM_VERSION=10 sh -
```

Running pnpm as root fails `self-update` and similar with `ERR_PNPM_SUDO_NOT_SUPPORTED`; the store and config live in the user's home.

Everyday:

```bash
pnpm install            # from pnpm-lock.yaml
pnpm add vue
pnpm add -D vitest
pnpm remove vue
pnpm update
pnpm run dev            # or: pnpm dev
pnpm dlx nuxi@latest init my-app
pnpm self-update
pnpm store path         # store location, under the Linux home
```

Keep projects under `~/code` so installs stay fast.
