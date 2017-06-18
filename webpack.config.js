// webpack.config.js
var Encore = require('@symfony/webpack-encore');
var CopyWebpackPlugin = require('copy-webpack-plugin');

Encore
  .setOutputPath('./web/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()
  
  .addEntry('js/app', './web/src/js/index.js')
  .addStyleEntry('css/app', './web/src/scss/app.scss')
  .enableReactPreset()
  .enableSassLoader()
  .enablePostCssLoader()
  .autoProvidejQuery()
  
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

let config = Encore.getWebpackConfig();
config.plugins.push(new CopyWebpackPlugin([
  { from: 'web/src/template', to: 'template' }
]));

// export the final configuration
module.exports = config;