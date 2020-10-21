// production config
const WorkboxPlugin = require('workbox-webpack-plugin');
const merge = require('webpack-merge');
const {resolve} = require('path');

const target = process.env.TARGET || 'web';
const isCordova = target === 'cordova'
function resolvePath(dir) {
  return resolve(__dirname, '../../../', dir);
}

const commonConfig = require('./common');

module.exports = merge(commonConfig, {
  mode: 'production',
  entry: './js/App.tsx',
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolvePath(isCordova ? 'cordova/www' : 'www'),
    publicPath: isCordova ?  '/android_asset/www/' :'/' ,
  },
  devtool: 'source-map',
  plugins:
    isCordova ? [
      new WorkboxPlugin.InjectManifest({
        swSrc: resolvePath('src/service-worker.js'),
      })
    ] : []
  ,
})
;
