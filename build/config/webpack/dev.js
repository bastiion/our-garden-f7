// development config
const merge = require( 'webpack-merge' )
const webpack = require( 'webpack' )
const commonConfig = require( './common' )

const {resolve} = require( 'path' )

const target = process.env.TARGET || 'web'
const isCordova = target === 'cordova'
function resolvePath( dir ) {
  return resolve( __dirname, '../../../', dir )
}

module.exports = merge( commonConfig, {
  mode: 'development',
  entry: [
    'react-hot-loader/patch', // activate HMR for React
    'webpack-dev-server/client?http://localhost:8080',// bundle the client for webpack-dev-server and connect to the provided endpoint
    'webpack/hot/only-dev-server', // bundle the client for hot reloading, only- means to only hot reload for successful updates
    './js/App.tsx' // the entry point of our app
  ],
  output: {
    filename: 'js/bundle.[hash].min.js',
    path: resolvePath( isCordova ? 'cordova/www' : 'www' ),
    publicPath: isCordova ?  '/android_asset/www/' :'/' ,
  },
  devServer: {
    hot: true, // enable HMR on the server
  },
  devtool: 'eval',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  ],
} )
