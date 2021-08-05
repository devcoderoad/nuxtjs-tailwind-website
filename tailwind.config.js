module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    'content/**/**.md'
  ],
  theme: {
    darkSelector: '.dark-mode',
    extend: {
      // fontFamily: {
      //   lora: ''
      // },
      zIndex: {
        '-1': '-1',
        '-10': '-10'
      },
      colors: {
        brand: {
          DEFAULT: '#f2f',
          light: '#ccc',
          dark: '#bbb'
        },
        primary: '#990',
        secondary: '#990',
        success: '#990',
        warning: '#990',
        info: '#990',
        danger: '#990'
      }
    }
  },
  variants: {
    backgroundColor: [
      'dark',
      'dark-hover',
      'dark-group-hover',
      'dark-even',
      'dark-odd',
      'hover',
      'responsive'
    ],
    borderColor: [
      'dark',
      'dark-focus',
      'dark-focus-within',
      'hover',
      'responsive'
    ],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'responsive']
  },
  plugins: [require('tailwindcss-dark-mode')(), require('postcss')]
}
