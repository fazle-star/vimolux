/** @type {import('tailwindcss').Config} */
    const plugin = require('tailwind-scrollbar');
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    // Safelist untuk background colors
    {
      pattern: /bg-(putih|abu|kuning|hijau|tosca|biru|merah|pink|oren|coklat|krem|ungu|hitam)/,
    },
    // Safelist untuk text colors
    {
      pattern: /text-(putih|abu|kuning|hijau|tosca|biru|merah|pink|oren|coklat|krem|ungu|hitam)/,
    }
  ],
  theme: {
    extend: {
      backgroundColor: {
        softblue: '#EBEAFF',
        softblue2: '#9694FF',
        softblue3: '#474E93',

        putih: {
          DEFAULT: '#FFFFFF',
          seju: '#F0F8FF',
          tulang: '#FFF5EE',
        },
        
        // Kelompok Abu-abu
        abu: {
          DEFAULT: '#808080',
          100: '#D3D3D3',    // muda
          200: '#808080',    // sedang
          300: '#696969',    // tua
          hijau: '#708090',
          biru: '#778899',
        },

        // Kelompok Kuning
        kuning: {
          DEFAULT: '#FFD700',
          lemon: '#FFF44F',
          gading: '#FFE878',
          medium: '#FFD700',
          golden: '#DAA520',
        },

        // Kelompok Hijau
        hijau: {
          DEFAULT: '#3CB371',
          100: '#90EE90',     // muda
          200: '#3CB371',     // sedang
          300: '#006400',     // tua
          pandan: '#90EE90',
          kuning: '#7FFF00',
        },

        // Kelompok Tosca
        tosca: {
          DEFAULT: '#20B2AA',
          100: '#40E0D0',     // muda
          200: '#20B2AA',     // sedang
          300: '#008080',     // tua
          biru: '#48D1CC',
        },

        // Kelompok Biru
        biru: {
          DEFAULT: '#4169E1',
          100: '#87CEEB',     // muda
          200: '#4169E1',     // sedang
          300: '#00008B',     // tua
          langit: '#87CEFA',
        },

        // Kelompok Merah
        merah: {
          DEFAULT: '#DC143C',
          100: '#FF69B4',     // muda
          200: '#DC143C',     // sedang
          300: '#8B0000',     // tua
          salem: '#FA8072',
        },

        // Kelompok Pink
        pink: {
          DEFAULT: '#FFC0CB',
          100: '#FFC0CB',     // muda
          200: '#FF1493',     // tua
        },

        // Kelompok Oranye
        oren: {
          DEFAULT: '#FFA500',
          100: '#FFA500',     // muda
          200: '#FF4500',     // tua
        },

        // Kelompok Coklat
        coklat: {
          DEFAULT: '#8B4513',
          100: '#A0522D',     // muda
          200: '#8B4513',     // tua
          mocca: '#8B4513',
        },

        // Kelompok Krem
        krem: {
          DEFAULT: '#DEB887',
          100: '#FFE4C4',     // muda
          200: '#DEB887',     // tua
        },

        // Kelompok Ungu
        ungu: {
          DEFAULT: '#800080',
          100: '#DDA0DD',     // muda
          200: '#800080',     // tua
        },

        // Warna Dasar
        hitam: '#000000',
      },
      
      animation: {
        'slide-top': 'slideInFromTop 1s ease-out forwards',
        'slide-top-delay-300': 'slideInFromTop 1s ease-out forwards 300ms',
        'slide-top-delay-400': 'slideInFromTop 1s ease-out forwards 400ms',
        'slide-top-delay-500': 'slideInFromTop 1s ease-out forwards 500ms',
      },

      keyframes: {
        slideInFromTop: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        }
      }
    },
  },  
  plugins: [require('tailwind-scrollbar-hide')],
}