module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    mode: `all`,
    content: [
      `src/**/*.html`,
      `src/**/*.js`,
      `src/**/*.ts`,
      `src/**/*.jsx`,
      `src/**/*.tsx`,
    ]
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  corePlugins: {
    animation: false
  }
};
