'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/styles/index.styl',
    './src/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: [
                'react-hot',
                'babel?presets[]=es2015,presets[]=react,presets[]=stage-0&plugins[]=transform-runtime'
            ]
        },
        {
            test: /\.styl$/,
            loaders: [
                'style',
                'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
                'stylus?linenos=true&resolve url'
            ]
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};