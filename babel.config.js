const dev = process.env.NODE_ENV !== `production`;


module.exports = {
  plugins: dev ? [ `react-refresh/babel` ] : []
};
