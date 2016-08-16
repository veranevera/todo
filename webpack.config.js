'use strict';

var webpack = require('webpack');
var dotenv = require('dotenv');
dotenv.load();

const NODE_ENV = process.env.NODE_ENV || 'developer';
const HOST = process.env.HOST;
const PORT = process.env.PORT;
let isDevelopment = NODE_ENV === 'developer';

var webpackConfig = {
    entry: [
    './src/styles/index.styl',
    './src/index.jsx'
    ],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: isDevelopment ?
                [
                    'react-hot',
                    'babel?presets[]=es2015,presets[]=react,presets[]=stage-0&plugins[]=transform-runtime'
                ]
                :
                ['strip?strip[]=console.log', 'babel?presets[]=es2015,presets[]=react,presets[]=stage-0']
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
    node: {
        fs: "empty"
    },
    plugins: [
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(NODE_ENV)
        })
    ]
};

if (!isDevelopment) {
    webpackConfig.plugins.push(
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({comments: /a^/, compress: {
            warnings:     false,
            drop_console: true,
            unsafe:       true
        }}),
        new webpack.optimize.DedupePlugin()
    );
} else {
    webpackConfig.entry.unshift(
        'webpack-dev-server/client?http://' + HOST + ':' + PORT + '',
        'webpack/hot/only-dev-server'
    );
    webpackConfig.devServer = {
        port: PORT,
        contentBase: './dist',
        hot: true
    };
    webpackConfig.plugins.push(new webpack.HotModuleReplacementPlugin());
}

module.exports = webpackConfig;