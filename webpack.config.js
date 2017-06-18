// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
  .setOutputPath('./web/build/')
  .setPublicPath('/build')
  .cleanupOutputBeforeBuild()
  
  .addEntry('js/app', './web/src/js/app.js')
  .addStyleEntry('css/app', './web/src/scss/app.scss')
  
  .enableReactPreset()
  .enableSassLoader()
  .enablePostCssLoader()
  .autoProvidejQuery()
  
  .enableSourceMaps(!Encore.isProduction())
  .enableVersioning(Encore.isProduction())
;

// export the final configuration
module.exports = Encore.getWebpackConfig();