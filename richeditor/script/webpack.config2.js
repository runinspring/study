var fs = require('fs');

var path = require('path');
var webpack = require("webpack");
var urlProject = fs.realpathSync('./');
var node_modules = path.resolve(urlProject, 'node_modules');
console.log(12,node_modules);
config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(urlProject, 'src/Main.tsx')
    ],
    resolve: {

    },
    output: {
        path: path.resolve(urlProject, 'app'),
        extensions: ['', '.js', '.ts', '.tsx'],
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.jsx?$/, loader: "babel",
                include: /src/,
                exclude: [node_modules],
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: "style!css!sass"},
            { test: /\.(jpg|png)$/, loader: "url?limit=8192"}
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
//test: path.join(__dirname, 'es2015'),