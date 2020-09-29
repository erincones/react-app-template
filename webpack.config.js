const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const copyWebpackPlugin = require(`copy-webpack-plugin`);
const ReactRefreshWebpackPlugin = require(`@pmmmwh/react-refresh-webpack-plugin`);


const dev = process.env.NODE_ENV !== `production`;
const url = `https://erincones.github.io/react-app-template/`;

module.exports = {
  entry: path.join(__dirname, `src`, `index.tsx`),
  output: {
    path: path.join(__dirname, `build`),
    filename: `main.js`
  },
  mode: dev ? `development` : `production`,
  devtool: dev ? `inline-source-map` : false,
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/i,
        exclude: /node_modules/i,
        use: (dev ? [ `babel-loader` ] : []).concat(`ts-loader`)
      },
      {
        test: /\.s?css$/i,
        exclude: /node_modules/i,
        use: [
          `style-loader`,
          { loader: `css-loader`, options: { sourceMap: false } },
          `postcss-loader`,
          `sass-loader`
        ]
      }
    ]
  },
  resolve: {
    extensions: [ `.js`, `.ts`, `.jsx`, `.tsx`, `.json` ],
    modules: [
      path.join(__dirname, `src`),
      `node_modules`
    ]
  },
  plugins: (dev ? [ new ReactRefreshWebpackPlugin() ] : []).concat([
    new HtmlWebpackPlugin({
      hash: dev,
      filename: `index.html`,
      template: path.join(__dirname, `public`, `index.html`),
      templateParameters: {
        name: `React App Template`,
        author: `Erick Rincones`,
        description: `A Webpack + React + Tailwind CSS project setup from scratch`,
        keywords: `webpack, react, tailwind, tailwindcss, template, scratch`,
        theme: `#000000`,
        twitter: `@ErickRincones`,
        url: url,
        image: `${url}img/cover.png`,
        imageh: `1920`,
        imagew: `1080`
      }
    }),
    new copyWebpackPlugin({
      patterns: [{
        from: `public/`,
        globOptions: { ignore: [ `index.html` ] }
      }]
    })
  ]),
  devServer: {
    hot: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, `public`),
    host: `0.0.0.0`,
    port: `8080`
  }
};
