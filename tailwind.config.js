module.exports = {
  theme: {
    extend: {
      spacing: {
        '80': '20rem',
        '108': '27rem',
      },
      borderWidth: {
        '14': '14px',
      }
    },
    screens: {
      'xs': '340px',
      // => @media (min-width: 340px) { ... }

      'sm': '560px',
      // => @media (min-width: 640px) { ... }

      'md': '780px',
      // => @media (min-width: 768px) { ... }

      'lg': '940px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1200px',
      // => @media (min-width: 1280px) { ... }
      
      'xxl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    container: {
      padding: {
        default: '1rem',
        sm: '1.5rem',
        // lg: '3rem',
        // xl: '4rem',
      },
      center: true,
      maxWidth: {
        default: 'none',
        'xs': '560px',
        'sm': '780px',
        'md': '940px',
        'lg': '120px',
        'xl': '1400px'
      },
    },
    colors: {
      accent: {
        100: "#ffcc33",
        200: "#FFBF00",
      },

      background: {
        primary: 'var(--bg-background-primary)',
        secondary: 'var(--bg-background-secondary)',
        tertiary: 'var(--bg-background-tertiary)',

        form: 'var(--bg-background-form)',
      },

      copy: {
        primary: 'var(--text-copy-primary)',
        secondary: 'var(--text-copy-hover)',
      },

      'border-color': {
        primary: 'var(--border-border-color-primary)',
      },

      transparent: 'transparent',

      black: '#000',
      white: '#fff',

      blue: {
        100:  "#e7ffff",
        200:  "#caf8ff",
        300:  "#a1e9ff",
        400:  "#6dcfff",
        500:  "#48a6e5",
        600:  "#2271c5",
        700:  "#29628A",
        800:  "#21406E",
        900:  "#00375C",
        1000: "#002B47"
      },

      indigo: {
        100: '#ebf4ff',
        200: '#c3dafe',
        300: '#a3bffa',
        400: '#7f9cf5',
        500: '#667eea',
        600: '#5a67d8',
        700: '#4c51bf',
        800: '#434190',
        900: '#3c366b',
      },

      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
    },
    fontFamily: {
      sans: [
        'Metropolis',
        'Nunito Sans',
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      display: ['Titillium Web', 'sans-serif'],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    lineHeight: {
      none: '1',
      tight: '1.1',
      snug: '1.375',
      normal: '1.65',
    },
    gradients: theme => ({
      // Array definition (defaults to linear gradients).
      'topaz':        ['30deg', theme('colors.orange.500'), theme('colors.pink.400')],
      'topaz-dark':   ['30deg', theme('colors.orange.700'), theme('colors.pink.600')],
      'emerald':      ['to right', theme('colors.green.400'), theme('colors.teal.500')],
      'fireopal':     ['to right', '#40E0D0', '#FF8C00', '#FF0080'],
      'relay':        ['to top left', '#3A1C71', '#D76D77', '#FFAF7B'],
      'screenLight':  ['to top right', '#f5f5f5', '#dee5ed', '#bccee6'],
      'screenDark':   ['to top right', '#000b29', '#021445', '#092c8b'],
      'blue-g-900':     ['to bottom', theme('colors.blue.800'), theme('colors.blue.9000')],
      'blue-g-1000':    ['to bottom', theme('colors.blue.900'), theme('colors.blue.1000')],

      // Object definition.
      'mono-circle': {
          type: 'radial',
          colors: ['circle', '#CCC', '#000']
      },
    }),
    animations: {
      // Assumes keyframes are available.
      spin: 'spin 4s linear infinite',
      shake: 'shake .5s',
    },
    keyframes: {
      bounce: {
          '0%, 100%': { 'transform': 'translateY(0)' },
          '50%': { 'transform': 'translateY(-5px)' },
      },
    },
  },
  variants: {
    stroke: ['responsive', 'hover', 'focus'],
    gradients: ['responsive', 'hover'],
  },
  plugins: [
    require('tailwindcss-plugins/gradients'),
    require('tailwindcss-plugins/animations'),
    require('tailwindcss-plugins/keyframes'),
  ]
}
