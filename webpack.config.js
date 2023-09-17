const path = require('path')
let fs = require('fs')

const nameDir  = (title) => {
  return  fs.readFileSync(__dirname + `/src/${title}.html`);
}

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 mode: 'production',
 entry: {
    filename: path.resolve(__dirname, 'src/index.js'),
    
 },
 output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    assetModuleFilename: '[name][ext]',
 },
 performance: {
    hints: false,
    maxAssetSize: 1512000,
    maxEntrypointSize: 1512000,
 },
 devServer: {
    port: 9000,
    compress: true,
    hot: true,
    static: {
        directory: path.join(__dirname, 'dist')
    },
},
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
            new HtmlWebpackPlugin({
              filename: 'index.html',
              template: "./src/index.html",
              harangue: nameDir('harangue'),
              typographyDescrPhone: nameDir('typographyDescrPhone'),
              typographyDescrDesktop: nameDir('typographyDescrDesktop'),
              textField: nameDir('textField'), 
              select: nameDir('select'), 
              checkbox: nameDir('checkbox'), 
              radio: nameDir('radio'), 
              accordion: nameDir('accordion'), 
              buttonUi: nameDir('buttonUi'), 
              sideMenu: nameDir('sideMenu'), 
              header: nameDir('header'), 
              menu: nameDir('menu'),
              desktop: nameDir('desktop'),
              tab: nameDir('tab'),
              phone: nameDir('phone')
            }),
            
          ]
  
};
