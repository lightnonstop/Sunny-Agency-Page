/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      colors: {
        'soft-red': 'hsl(7, 99%, 70%)',
        'yellow': 'hsl(51, 100%, 49%)',
        'dark-desaturated': 'hsl(167, 40%, 24%)',
        'dark-blue': 'hsl(198, 62%, 26%)',
        'dark-moderate-cyan': 'hsl(168, 34%, 41%)',
        'very-dark-desaturated-blue': 'hsl(212, 27%, 19%)',
        'dark-grayish-blue': 'hsl(232, 10%, 55%)',
        'grayish-blue': 'hsl(210, 4%, 67%)',
        'bright-blue': '#3ebfff',
        'white': 'hsl(0, 0%, 100%)'
      },
      extend: {
        fontFamily: {
          'fraunces': ['Fraunces', 'sans-serif'],
          'barlow': ['Barlow', 'sans-serif']
        },
        fontWeight: {
          'fra-700': '700',
          'bar-600': '600',
          'fra-900': '900',
        }
      }
    },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
  