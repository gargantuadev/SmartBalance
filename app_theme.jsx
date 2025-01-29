import { DefaultTheme} from 'react-native-paper';


export const customTheme = {
    ...DefaultTheme, // Or use DarkTheme
    colors: {
      ...DefaultTheme.colors, // Retain default colors
      primary: '#1a535c', // Custom primary color
      secondary: '#4ecdc4',
      accent: '#ff6b6b',  // Custom accent color "#ffe6d"
      background: '#F7fff7', // Background color
      text: "#1a535c"
    },
  
    fonts: {
      ...DefaultTheme.fonts,
      regular: {
        ...DefaultTheme.fonts.regular,
        fontSize: 20, // Set the default font size
      },
      medium: {
        ...DefaultTheme.fonts.medium,
        fontSize: 18,
      },
      light: {
        ...DefaultTheme.fonts.light,
        fontSize: 14,
      },
      thin: {
        ...DefaultTheme.fonts.thin,
        fontSize: 12,
      },
    },
  };