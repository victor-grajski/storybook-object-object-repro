import baseThemeFile from './base';

//create a new object to populate theme name in theme selector
const baseTheme = { themeName: "Base", ...baseThemeFile };

export const themes = [baseTheme];

export const themeNames = Object.keys(themes).map(k => { return themes[k].themeName });
