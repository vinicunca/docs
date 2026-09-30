function slug(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function inline(value) {
  return String(value ?? '').replaceAll('`', '\\`').replaceAll('\n', ' ').trim();
}

export function fieldList(fields, kind) {
  if (!fields.length) {
    return `No ${kind.toLowerCase()} are declared.`;
  }

  return fields.map((field) => {
    const requirement = kind === 'Props' ? (field.required ? 'required' : 'optional') : '';
    const details = [inline(field.type), requirement, field.default ? `default: ${inline(field.default)}` : '']
      .filter(Boolean).join('; ');
    return `- **${inline(field.name)}**${details ? ` — \`${details}\`` : ''}${field.description ? `: ${inline(field.description)}` : ''}`;
  }).join('\n');
}

export function renderAkarReference(metadata, tag, commit) {
  if (metadata.schemaVersion !== 1 || metadata.package !== 'akar' || metadata.version !== tag.slice(1)) {
    throw new Error(`Akar metadata does not match ${tag}`);
  }

  const groups = new Map();
  for (const [name, component] of Object.entries(metadata.components ?? {})) {
    const match = component.source?.match(/^packages\/core\/src\/([A-Za-z0-9]+)\/[A-Za-z0-9]+\.vue$/);
    if (!match) {
      throw new Error(`Invalid source path for Akar component ${name}`);
    }
    const group = match[1];
    if (!groups.has(group)) {
      groups.set(group, []);
    }
    groups.get(group).push([name, component]);
  }

  if (groups.size < 50) {
    throw new Error(`Expected Akar component groups; found ${groups.size}`);
  }

  const pages = [];
  const index = [];
  for (const [group, components] of [...groups].sort(([a], [b]) => a.localeCompare(b))) {
    const path = `/akar/components/${slug(group)}`;
    const sourceUrl = `https://github.com/vinicunca/akar/tree/${commit}/packages/core/src/${group}`;
    index.push(`- [${group}](${path}) — ${components.length} component${components.length === 1 ? '' : 's'}`);

    const entries = components.sort(([a], [b]) => a.localeCompare(b)).map(([name, component]) => {
      const componentUrl = `https://github.com/vinicunca/akar/blob/${commit}/${component.source}`;
      return [
        `## ${name}`,
        component.description ? inline(component.description) : '',
        `[Source](${componentUrl})`,
        '### Props', fieldList(component.props, 'Props'),
        '### Slots', fieldList(component.slots, 'Slots'),
        '### Events', fieldList(component.events, 'Events'),
      ].filter(Boolean).join('\n\n');
    });

    const rendered = [
      '---',
      `title: ${JSON.stringify(group)}`,
      `description: ${JSON.stringify(`Akar ${group} components, props, slots, and events.`)}`,
      'package: akar',
      `sourceTag: ${JSON.stringify(tag)}`,
      `sourceCommit: ${JSON.stringify(commit)}`,
      `sourceUrl: ${JSON.stringify(sourceUrl)}`,
      '---',
      '',
      ...entries,
      '',
    ].join('\n');

    pages.push({
      source: `generated:packages/core/src/${group}`,
      destination: `content/akar/components/${slug(group)}.md`,
      rendered,
    });
  }

  const indexRendered = [
    '---',
    'title: Component reference',
    'description: Props, slots, and events for every public Akar component.',
    'package: akar',
    `sourceTag: ${JSON.stringify(tag)}`,
    `sourceCommit: ${JSON.stringify(commit)}`,
    `sourceUrl: ${JSON.stringify(`https://github.com/vinicunca/akar/blob/${commit}/packages/core/src/index.ts`)}`,
    '---',
    '',
    'The reference below is generated from the Vue components exported by this Akar release.',
    '',
    ...index,
    '',
  ].join('\n');

  pages.unshift({
    source: 'generated:packages/core/src/index.ts',
    destination: 'content/akar/components/1.index.md',
    rendered: indexRendered,
  });

  return pages;
}
