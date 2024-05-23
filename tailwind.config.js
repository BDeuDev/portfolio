/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Incluye todos los archivos JavaScript y TypeScript en el directorio src
  ],
  theme: {
    extend: {
      textShadow: {
        'custom-shadow': '1px 1px white, -1px -1px #444',
      },
      screens:{
        'mobile':'320px'
      },
      boxShadow: {
        'white':'0 0 0 2px #ffffff',
        'black':'0 0 0 2px #0000'
      },
      width:{
        '6/10':'width: 60%'
      },
      colors:{
        transparent: 'transparent',
        current: 'currentColor',
        'custom-shadow': 'rgba(0, 0, 0, 0.5)', // Color de sombra personalizado
        'principal':'#0F1c30',
        'secundario':'#304A6E',
        'neutro':'#668DC0',
        'claro1':'#c0d0ef',
        'claro2':'#c2c6ce'
      },
      fontFamily : {
        'orbitron':'Orbitron',
        'vibes':'Great Vibes',
        'nunito':'Nunito',
        'raleway':'Raleway'
      }
    },
  },
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './public/index.html'],
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-depressed': {
          textFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          textShadow: '1px 1px 2px #ffff inset', // Sombra interior
        },
      };
      
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
    require('@tailwindcss/typography'),
  ],
}
