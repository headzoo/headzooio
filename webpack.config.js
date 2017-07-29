// webpack.config.js
var path = require('path');
var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

Encore
  .setOutputPath('./web/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()

  .addEntry('js/app', './web/src/js/index.jsx')
  .addStyleEntry('css/app', './web/src/scss/app.scss')
  .enableReactPreset()
  .enableSassLoader()
  .enablePostCssLoader()

  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

let config = Encore.getWebpackConfig();
config.plugins[8].options.compress = { warnings: true };
config.plugins[8].options.output = { comments: false };
config.plugins.push(new CopyWebpackPlugin([
  { from: 'web/src/template', to: 'template' }
]));

// Cuts down on the size of highlight.js.
config.plugins.push(new webpack.ContextReplacementPlugin(
  /highlight\.js\/lib\/languages$/,
  new RegExp(`^./(${['javascript', 'php', 'bash', 'yaml', 'xml', 'twig', 'java'].join('|')})$`)
));
//config.plugins.push(new BundleAnalyzerPlugin());

// export the final configuration
module.exports = config;
