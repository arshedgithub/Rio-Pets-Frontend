import { colors } from "./colors";

/**
 * Get a color from the theme
 * @param path Path to the color (e.g. 'primary.main', 'neutral.text')
 * @returns The color hex value
 */
export function getColor(path: string): string {
  const parts = path.split(".");
  let result: unknown = colors;

  for (const part of parts) {
    if (result && typeof result === "object" && part in result) {
      result = (result as Record<string, unknown>)[part];
    } else {
      console.warn(`Color path "${path}" not found in theme`);
      return "";
    }
  }

  return typeof result === "string" ? result : "";
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
