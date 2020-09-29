# React App Template

This template is ready to develop modern [React][a] single page applications
using [Tailwind CSS][b] as CSS framework, like [Create React App][c] but
manually setup from scratch. Just clone it and start to develop a new amazing
app.

```sh
git clone https://github.com/erincones/react-app-template new-app-name # For HTTPS
git clone git@github.com:erincones/react-app-template.git new-app-name # For SSH
```


## Main features

[Webpack][d] is setup for [TypeScript][e] and [Sass][f] trough
[Tailwind CSS][b], with ["Fast Refresh"][g] enabled, [ESLint][h] and
[Stylelint][i] support for a better develop experience. However,
only the minimal dependencies have been added, so you can do exactly what you
want to do as add a router like [@reach/router][j].


### SEO

A basic SEO setup with [Facebook Open Graph][k] and [Twitter cards][l] meta tags
is already setup too, customize it through [HtmlWebpackPlugin][m] in the
[webpack.config.json][1] file. Also, you can adapt the
[public/manifest.json][2] file to your needs.


### Static resources

The static resources should be placed in the [public][3] directory. Feel free to
add so many sub directories as you need. For example, the icons (except for
[favicon.ico][4]) and the cover image for the Open Graph and Twitter cards can
be found in the [public/img][5] directory, but new images can be placed here if
you need.


### Scripts

Once the template is cloned, you can run several commands.

- **`npm start`**: Start the development server and watch files for hot reload.
- **`npm run develop`**: Same that `npm start`
- **`npm run build`**: Build the app into static files for production into the
  build directory.
- **`npm run deploy`**: Run the build script and publish the result files into
  the `gh-pages` branch on GitHub.
- **`npm run test`**: Starts the test runner.
- **`npm run clean`**: Removes the build directory.


## Notes

The ["Fast Refresh"][g] is achieved trough the
[React Refresh Webpack Plugin][g], so editing the [`src/components/app.tsx`][7]
file [always fires a full reload][n].


## License

This project is licensed under the [MIT License][7]


<!-- References -->
[a]: https://reactjs.org/
[b]: https://tailwindcss.com/
[c]: https://create-react-app.dev/
[d]: https://webpack.js.org/
[e]: https://www.typescriptlang.org/
[f]: https://sass-lang.com/
[g]: https://github.com/pmmmwh/react-refresh-webpack-plugin
[h]: https://eslint.org/
[i]: https://stylelint.io/
[j]: https://reach.tech/router/
[k]: https://developers.facebook.com/docs/sharing/webmasters/
[l]: https://developer.twitter.com/docs/twitter-for-websites/cards/
[m]: https://webpack.js.org/plugins/html-webpack-plugin/
[n]: https://github.com/pmmmwh/react-refresh-webpack-plugin/blob/main/docs/TROUBLESHOOTING.md#edits-always-lead-to-full-reload

[1]: webpack.config.js#L51-60
[2]: public/manifest.json
[3]: public
[4]: public/favicon.ico
[5]: public/img
[6]: src/index.tsx
[7]: LICENSE
