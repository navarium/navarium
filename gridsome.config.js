// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require("tailwindcss");

module.exports = {
  siteName: 'Navarium',
  siteUrl: 'https://navarium.com',
  siteDescription: '',
  templates: {
    Reference: '/:lang/references/:slug'
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/reference/**/*.md',
        typeName: 'Reference',
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
    },
    {
      use: "gridsome-plugin-i18n",
      options: {
        locales: [ // locales list
          'hu',
          'en',
          'de',
          'it'
        ],
        /* pathAliases: { // path segment alias for each locales
          'it': 'it',
          'hu': 'fr',
          'de': 'de',
          'en': 'en'
        }, */
        fallbackLocale: 'hu',
        defaultLocale: 'hu',
        enablePathRewrite: true,
        rewriteDefaultLanguage: true,
        messages: {
          'hu': require('./src/locales/hu.json'),
          'en': require('./src/locales/en.json'),
          'de': require('./src/locales/de.json'),
          'it': require('./src/locales/it.json')
        }
      }
    }
  ],
}
