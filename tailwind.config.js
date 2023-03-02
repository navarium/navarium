module.exports = {
  darkMode: 'class',
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.pug',
      './src/**/*.md'
    ],
  },
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00002a'
        }
      },
      inset: {
        'full': '100%'
      },
      opacity: {
        '10': '0.1',
        '90': '0.9'
      },
      boxShadow: {
        'lg-invert': '0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)'
      }
    }
  },
  variants: {
    boxShadow: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus', 'dark'],
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}
