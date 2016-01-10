var fs = require('fs');

var path = require('path');
var webpack = require("webpack");
var urlProject = fs.realpathSync('./');
//console.log("urlProject:",urlProject);
var node_modules = path.resolve(urlProject, 'node_modules');

config = {
    entry: {
        app: path.resolve(urlProject, 'src/Main'),
        vendors: ['react']
    },
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    output: {
        path: path.resolve(urlProject, 'app/public'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};

module.exports = config;
