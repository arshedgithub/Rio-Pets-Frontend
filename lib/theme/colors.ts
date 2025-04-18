export const colors = {
    primary: {
      main: '#3498db', // Ocean Blue
      light: '#5dade2',
      dark: '#2980b9',
    },
    secondary: {
      main: '#f1c40f', // Sunny Yellow
      light: '#f4d03f',
      dark: '#d4ac0d',
    },
    neutral: {
      background: '#f5f5f5', // Light Gray
      text: '#34495e', // Dark Charcoal
      lightText: '#7f8c8d',
    },
    accent: {
      premium: '#9b59b6', // Purple
      features: '#1abc9c', // Teal
    },
  };
  
  export type ColorTheme = typeof colors;
  export type ColorKey = keyof typeof colors;