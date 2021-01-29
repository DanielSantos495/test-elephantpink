const path = require('path')
const HtmlWebpaclPlugin = require('html-webpack-plugin')
const { HotModuleReplacementPlugin } = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
   entry: path.resolve(__dirname, 'src/index.js'),
   output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js'
   },
   devServer: {
      contentBase: path.resolve(__dirname, 'src'),
      hot: true,
      open: true
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
         },
         {
            test: /.vue$/,
            use: 'vue-loader'
         },
         {
            test: /\.css|scss$/,
            use: [
               'style-loader',
               'css-loader',
               'sass-loader'
            ]
         },
         {
            test: /\.jpe?g|png|.svg|.ttf|.otf|.ttc$/,
            use: {
               loader: 'file-loader',
               options: {
                  outputPath: 'assets/'
               }
            }
         }
      ]
   },
   plugins: [
      new VueLoaderPlugin(),
      new HotModuleReplacementPlugin(),
      new HtmlWebpaclPlugin({
         template: path.resolve(__dirname, 'public/index.html'),
         filename: 'index.html'
      })
   ]

}
