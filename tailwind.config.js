module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: {
        light: '#85d7ff',
        DEFAULT: '#1fb6ff',
        dark: '#009eeb',
      },
      white:{
        smoke:'#E7EDF4',
        dark:'#F3F4F6',
        default:'#A1A1AA',

      },
      orange:{
        light:'#F9FAFB',
        dark:'#F3F4F6',
        default:'#F97316',
      },
      black:{
        light:'#F9FAFB',
        dark:'#F3F4F6',
        default:'#18181B',
      },
      purple:{
        light:'#F9FAFB',
        dark:'#F3F4F6',
        default:'#C084FC',
      },

      textColor: {
        'primary': '#3490dc',
        'secondary': '#A1A1AA',
        'danger': '#999999',
      },

    },
  variants: {
    extend: {},
  },
  plugins: [],
}
}