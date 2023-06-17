/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/Landing Page/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'dgreen': '#20B15A',
       'lgreen':'#D7F5DC',
       'black': '#000000',
       'white':'#ffffff',
       'orange':'#F55F1D',
       'grey':'#c0c0c0'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        '4xl': '4rem', // Custom border-radius value
      },
      fontSize:{
        'xxs':'0.5rem'
      },
    },
  },
  darkMode: "class",
  plugins: [],
}
