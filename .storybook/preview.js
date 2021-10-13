import { ThemeProvider } from '@mui/material';
import { ThemeProvider as EmotionThemeProvider } from "emotion-theming"

import { themes, themeNames } from '../src/themes/index';

const customViewports = {
  small: {
    name: 'Small (600px)',
    styles: {
      width: '600px',
      height: '1000px',
    },
  },
  medium: {
    name: 'Medium (900px)',
    styles: {
      width: '900px',
      height: '1200px',
    },
  },
  dod: {
    name: 'DoD (1024px)',
    styles: {
      width: '1024px',
      height: '768px',
    },
  },
  large: {
    name: 'Large (1200px)',
    styles: {
      width: '1200px',
      height: '800px',
    },
  },
  extraLarge: {
    name: 'Extra-Large (1536px)',
    styles: {
      width: '1536px',
      height: '900px',
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
  backgrounds: { disabled: true },
  viewport: {
    viewports: customViewports,
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: themeNames[0],
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: themeNames,
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
};

const TAG_SELECTOR = 'addon-backgrounds-color';

const createStyle = color => `
.sb-show-main, .docs-story, [id^='anchor--'] {
  background: ${color} !important;
  transition: background-color 0.3s;
}
`;

// set the preview and docs background colors according to theme
const addBackgroundStyle = color => {
  const css = createStyle(color);
  // const existingStyle = document.getElementById(TAG_SELECTOR);
  // if (existingStyle) {
  //   if (existingStyle.innerHTML !== css) {
  //     existingStyle.innerHTML = css;
  //   }
  // } 
    const style = document.createElement('style');
    style.setAttribute('id', TAG_SELECTOR);
    style.innerHTML = css;

    document.head.appendChild(style);
  
};

const getTheme = (themeName) => {
  return themes.find(obj => obj.themeName == themeName);
}

// load theme and switch background accordingly
const withThemeProvider = (Story, context) => {
  const theme = getTheme(context.globals.theme);
  const background = theme.themeName;
  context.parameters.backgrounds.default = background;
  addBackgroundStyle(theme.palette.background.default);

  return (
    <EmotionThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
      <Story {...context} />
    </ThemeProvider>
    </EmotionThemeProvider>
  )
}

export const decorators = [withThemeProvider];
