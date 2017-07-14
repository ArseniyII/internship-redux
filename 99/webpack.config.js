let path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'production')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'es2015', 'react', 'stage-0'],
                        cacheDirectory: true
                    }
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './html-template.html',
            filename: 'index.html',
            inject: true
        }),
    ],

    devServer: {
        contentBase: path.join(__dirname, "production"),
        compress: true,
        historyApiFallback: true,
        port: 9000
    }
};
