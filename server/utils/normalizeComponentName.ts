/**
 * Normalizes component names by removing Pohon UI prefixes
 *
 * @param componentName - The component name to normalize
 * @returns The normalized component name without P/p- prefixes
 *
 * @example
 * normalizeComponentName('PButton') // 'Button'
 * normalizeComponentName('PUser') // 'User'
 * normalizeComponentName('p-button') // 'button'
 * normalizeComponentName('p-user') // 'user'
 * normalizeComponentName('Button') // 'Button'
 * normalizeComponentName('User') // 'User'
 */
export function normalizeComponentName(componentName: string): string {
  let normalizedName = componentName

  // Check if starts with 'P' followed by an uppercase letter (indicating PascalCase)
  if (normalizedName.startsWith('P') && normalizedName.length > 1 && normalizedName[1] === normalizedName[1]?.toUpperCase()) {
    normalizedName = normalizedName.slice(1)

    // Handle p-button -> button, p-user -> user (kebab-case with p- prefix)
  } else if (normalizedName.toLowerCase().startsWith('p-')) {
    normalizedName = normalizedName.slice(2)
  }

  return normalizedName
}
