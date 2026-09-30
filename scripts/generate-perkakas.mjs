import { resolve } from 'node:path';
import { Application, OptionDefaults, ReflectionKind } from 'typedoc';

export async function generatePerkakasMetadata(checkout, commit) {
  const source = resolve(checkout);
  const app = await Application.bootstrap({
    entryPoints: [resolve(source, 'src/index.ts')],
    tsconfig: resolve(source, 'tsconfig.typedoc.json'),
    skipErrorChecking: true,
    excludeInternal: true,
    jsDocCompatibility: { exampleTag: false },
    blockTags: [
      ...OptionDefaults.blockTags,
      '@dataFirst',
      '@dataLast',
      '@lazy',
      '@signature',
    ],
    sourceLinkTemplate: `https://github.com/vinicunca/perkakas/blob/${commit}/{path}`,
  });

  const project = await app.convert();
  if (!project) {
    throw new Error('TypeDoc could not convert the Perkakas release');
  }

  const metadata = app.serializer.projectToObject(project, source);
  if (!metadata.children?.some(child => child.kind === ReflectionKind.Function) || !metadata.categories?.length) {
    throw new Error('Perkakas TypeDoc output has no documented functions or categories');
  }

  return `${JSON.stringify(metadata, null, 2)}\n`;
}
