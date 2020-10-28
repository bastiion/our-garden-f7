// shared config (dev and prod)
const {resolve} = require( 'path' )
const {CheckerPlugin} = require( 'awesome-typescript-loader' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const CopyWebpackPlugin = require( 'copy-webpack-plugin' )
const WorkboxPlugin = require( 'workbox-webpack-plugin' )

const env = process.env.NODE_ENV || 'development'

function resolvePath( dir ) {
  return resolve( __dirname, '../../../', dir )
}

const target = process.env.TARGET || 'web'
const isCordova = target === 'cordova'
module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
  },
  context: resolvePath( 'src' ),
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader', 'source-map-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(tsx|jsx)?$/,
        use: ['babel-loader', 'awesome-typescript-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', {loader: 'css-loader', options: {importLoaders: 1}}],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {importLoaders: 1}},
          'sass-loader',
        ],
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]',

        },
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
          'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false',
        ],
      },
    ],
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin( {
        filename: 'index.html',
        template: resolvePath('src/index.html'),
        inject: true,
        minify: env === 'production' ? {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        } : false,
      } ),
    new CopyWebpackPlugin( {
      patterns: [
        {
          noErrorOnMissing: true,
          from: resolvePath( 'src/static' ),
          to: resolvePath( isCordova ? 'cordova/www/static' : 'www/static' ),
        },
        {
          noErrorOnMissing: false,
          from: resolvePath( 'src/manifest.json' ),
          to: resolvePath( 'www/manifest.json' ),
        },
      ],
    } ),
    ...( !isCordova ? [
      new WorkboxPlugin.InjectManifest( {
        swSrc: resolvePath( 'src/service-worker.js' ),
      } )
    ] : [] ),
  ],
  performance: {
    hints: false,
  },
}
