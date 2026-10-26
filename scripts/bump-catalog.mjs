// Sets a package's version in the pnpm-workspace.yaml catalog, keeping its range prefix (^ or ~).
// Run: node scripts/bump-catalog.mjs <package-name> <version>
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const [name, version] = process.argv.slice(2);
if (!name || !/^\d+\.\d+\.\d+(?:-[\w.-]+)?$/.test(version ?? '')) {
  throw new Error('Usage: node scripts/bump-catalog.mjs <package-name> <version>');
}

const workspacePath = join(resolve(dirname(fileURLToPath(import.meta.url)), '..'), 'pnpm-workspace.yaml');
const workspace = readFileSync(workspacePath, 'utf8');

const escapedName = name.replace(/[.*+?^${}()|[\]\\/]/g, '\\$&');
const entry = new RegExp(`^(  '?${escapedName}'?: )([~^]?)(\\S+)$`, 'm');
const match = workspace.match(entry);
if (!match) {
  throw new Error(`${name} is not in the pnpm-workspace.yaml catalog`);
}

const [, , prefix, current] = match;
if (current === version) {
  console.log(`${name} is already ${prefix}${version}`);
} else {
  writeFileSync(workspacePath, workspace.replace(entry, `$1$2${version}`));
  console.log(`${name}: ${prefix}${current} -> ${prefix}${version}`);
}
