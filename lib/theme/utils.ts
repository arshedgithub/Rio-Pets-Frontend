import { colors } from './colors';

/**
 * Get a color from the theme
 * @param path Path to the color (e.g. 'primary.main', 'neutral.text')
 * @returns The color hex value
 */
export function getColor(path: string): string {
  const parts = path.split('.');
  let result: any = colors;
  
  for (const part of parts) {
    if (result && result[part] !== undefined) {
      result = result[part];
    } else {
      console.warn(`Color path "${path}" not found in theme`);
      return '';
    }
  }
  
  return result;
}

// Example of a tailwind-compatible function for creating themed classes
export function createThemeClasses() {
  return {
    primaryBg: { backgroundColor: colors.primary.main },
    secondaryBg: { backgroundColor: colors.secondary.main },
    premiumBg: { backgroundColor: colors.accent.premium },
    featureBg: { backgroundColor: colors.accent.features },
  };
}