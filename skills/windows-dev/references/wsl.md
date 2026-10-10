# Step 3: WSL 2 and Ubuntu

Source: https://vinicunca.dev/raw/windows-dev/guide/wsl.md

Everything after this step (zsh, Git, Node, pnpm, projects) lives inside the Ubuntu distro.

## Install

Needs **Terminal (Admin)** and a reboot; confirm with the user first.

```powershell
wsl --install
```

This enables the Windows features, installs WSL and the kernel, sets WSL 2 as default, and installs Ubuntu. Reboot when prompted; Ubuntu finishes installing after sign-in.

The user then creates a Linux username and password (nothing echoes while typing the password). This account is separate from Windows, belongs to this distro only, has `sudo`, and must be recreated after any reinstall or reset.

Update packages (Windows doesn't do this):

```bash
sudo apt update && sudo apt upgrade -y
```

If WSL already exists and `wsl --install` only prints help:

```powershell
wsl --list --online
wsl --install -d Ubuntu-24.04
```

## Everyday commands (PowerShell)

```powershell
wsl --update            # update WSL itself
wsl --version           # WSL and kernel versions
wsl --list --verbose    # distros and their WSL version
wsl --set-default Ubuntu
wsl --shutdown          # stop all distros and the VM (confirm first: kills running servers)
```

## Configure

Two files. Changes apply only after `wsl --shutdown` and a new WSL tab.

### `%UserProfile%\.wslconfig` (global VM settings)

Doesn't exist by default. Create it with `notepad $env:USERPROFILE\.wslconfig` (or the **WSL Settings** app). Check for an existing file before overwriting.

```ini
[wsl2]
# Cap the RAM WSL can use (default: 50% of Windows memory)
memory=8GB

# Share Windows' network interfaces: localhost works both ways,
# and IPv6 and VPNs behave like they do on Windows
networkingMode=mirrored
```

- `memory`: leave enough RAM for Windows, the browser and the editor. `8GB` suits a 16 GB machine.
- `networkingMode=mirrored` needs Windows 11 22H2+. On older builds omit it; default NAT still forwards `localhost` ports, so dev servers open in the Windows browser.

### `/etc/wsl.conf` (per distro)

systemd must be on so Docker, `snap` and `systemctl` work. The Ubuntu image from `wsl --install` already enables it. Check:

```bash
cat /etc/wsl.conf
```

If missing, add with `sudo nano /etc/wsl.conf`:

```ini
[boot]
systemd=true
```

After restarting WSL, confirm:

```bash
systemctl list-unit-files --type=service
```

## Files and performance

Keep projects in the Linux filesystem:

```bash
mkdir -p ~/code
cd ~/code
```

Files under `/mnt/c` are much slower from WSL, and Vite/Nuxt file watchers may miss changes there.

Cross-access:

- From Windows: File Explorer's **Linux** entry, or `\\wsl.localhost\Ubuntu\home\<user>` in the address bar. Pin `code` to Quick access.
- From WSL: `explorer.exe .` opens the current directory in File Explorer; Windows drives are under `/mnt` (`/mnt/c/Users/<you>`).

Next: set Windows Terminal to open Ubuntu in `~` ([windows.md](windows.md#3b-open-ubuntu-by-default-after-wsl-is-installed)).
