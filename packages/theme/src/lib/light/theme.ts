import {buildCustomTheme} from '../core';

export const lightTheme = buildCustomTheme({
  id: 'oneDark',
  editorTheme: [],
  properties: {
    darkMode: false,
    label: 'Light',
    previewBackground: '#0d6985',
    terminal: {
      main: '#ffffff',
      text: '#000000',
    },
  },
});