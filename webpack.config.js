const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniExtractCSSPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },

    plugins: [
        new MiniExtractCSSPlugin({
            filename: 'app.bundle.css'
        }),
        new HTMLWebpackPlugin({
            template: './src/index.html',
            filename: 'app.bundle.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniExtractCSSPlugin.loader,
                    'css-loader'
                ]

            }
        ]
    }
}