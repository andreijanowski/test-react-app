const purgeEnabled = process.env.NODE_ENV === "production"

console.log(`   ✅ purgeEnabled=${purgeEnabled}\n`)

const sizes = {
  0: '0rem',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  15: '3.75rem',
  16: '4rem',
  17: '4.25rem',
  18: '4.5rem',
  20: '5rem',
  21: '5.25rem',
  24: '6rem',
  28: '7rem',
  29: '7.25rem',
  32: '8rem',
  33: '8.25rem',
  36: '9rem',
  37: '9.25rem',
  38: '9.5rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  50: '12.5rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  68: '17rem',
  72: '18rem',
  75: '18.75rem',
  76: '19rem',
  80: '20rem',
  90: '22.5rem',
  100: '25rem',
  120: '30rem',
  130: '32.5rem',
  140: '35rem',
  160: '40rem',
  180: '45rem',
  192: '48rem',
  200: '50rem',
  210: '52.5rem',
  400: '100rem',
  420: '105rem',
  440: '110rem'
};

module.exports = {
  purge: {
    enabled: purgeEnabled,
    content: [
      "./src/**/*.html",
      "./src/**/*.tsx",
      "./src/**/*.jsx",
      "./public/**/*.html"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: sizes,
      width: sizes,
      height: sizes,
      maxWidth: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxHeight: sizes,
    }
  },
  variants: {
    extend: {
      borderWidth: ['last', 'first'],
    }
  },
  plugins: []
}
