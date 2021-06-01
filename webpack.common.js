const path = require('path')
const exclusion = /node_modules/

module.exports = {
 entry: {
  app: "./assets/js/app.js",
  vendor: "./assets/js/vendor.js",
  index: "./assets/js/index.js",
  table: "./assets/js/table.js",
  main: "./assets/ts/main.ts"
 },
 module: {
  rules: [{
    test: /\.html$/,
    use: ["html-loader"]
   },
   {
    test: /\.js|\.jsx$/,
    exclude: exclusion,
    loader: 'babel-loader',
   },
   {
    test: /\.ts|\.tsx?$/,
    exclude: exclusion,
    use: 'ts-loader',
   },
   {
    test: /\.(ttf|woff|woff2|eot|gif|png|jpe?g|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
    use: {
     loader: "file-loader",
     options: {
      name: "[name].[hash].[ext]",
      outputPath: "imgs"
     }
    }
   }
  ]
 },
 resolve: {
  extensions: ['.tsx', '.ts', '.js', '.jsx'],
 }
};