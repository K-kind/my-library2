module.exports = {
  stories: ['../src/stories/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
  ],
  // webpackFinal: async (config) => {
    // config.module.rules = config.module.rules.filter((rule) => {
    //   if ((rule.test instanceof RegExp) || rule.test.test('.vue')) {
    //     return {
    //       ...rule,
    //       options: {
    //         compilerOptions: {
    //           preserveWhitespace: false
    //         }
    //       }
    //     }
        // return {
        //   ...rule,
        //   options: {
        //     compilerOptions: {
        //       preserveWhitespace: false
        //     }
        //   }
        // }
    //   }
    //   return rule
    // })

    // config.module.rules.push({
    //   test: /\.vue$/,
    //   loader: 'vue-loader',
    //   options: {
    //     compilerOptions: {
    //       preserveWhitespace: false
    //     }
    //   }
    // })

    // return config

    // return {
    //   ...config,
    //   module: {
    //     rules: {
    //       test: /\.vue$/,
    //       loader: 'vue-loader',
    //       options: {
    //         compilerOptions: {
    //           preserveWhitespace: false
    //         }
    //       }
    //     },
    //   },
    //   plugins: [
    //     ...config.plugins,
    //   ],
    // }
  // }
}
