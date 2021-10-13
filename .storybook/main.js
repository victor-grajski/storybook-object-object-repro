module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: (prop) =>
        prop.parent
          ? /@mui/.test(prop.parent.fileName) || !/node_modules/.test(prop.parent.fileName)
          : true,
    },
    webpackFinal: async (config) => {
      config.module.rules.push({
        test: /\.mdx$/,
        use: 'raw-loader',
      });

      return {
        ...config,
        resolve: {
          ...config.resolve,
          extensions: [".mdx"],
          alias: {
            ...config.resolve.alias,
            '@emotion/core': toPath('node_modules/@emotion/react'),
            'emotion-theming': toPath('node_modules/@emotion/react'),
          },
        },
      };
    },
  }
    
}