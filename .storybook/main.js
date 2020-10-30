module.exports = {
  stories: ['../src/stories/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.vue$/,
        loader: 'vue-docgen-loader',
        options: {
          docgenOptions: {
            // options for vue-docgen-api...
          },
          // Injected property name
          injectAt: '__docgenInfo' // default
        },
        enforce: 'post'
    })
    return config
  }
}
