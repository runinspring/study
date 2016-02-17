var fs = require('fs');

var path = require('path');
var urlProject = fs.realpathSync('./');
var node_modules = path.resolve(urlProject, 'node_modules');
//console.log(111,__dirname);
//console.log(222,urlProject);
config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(urlProject, 'src/Main')
    ],
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(urlProject, 'app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            { test: /\.css$/, loader: "style!css"},
            {
                test: /css(\\|\/)[^\.]+\.(png|jpg)/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    plugins: [
        //new webpack.HotModuleReplacementPlugin()
    ]
};

module.exports = config;
//,
//{
//    test: /\.css$/, // Only .css files
//        loader: 'style!css' // Run both loaders
//},
//{
//    test: /css(\\|\/)[^\.]+\.(png|jpg)/,
//        loader: 'url-loader?limit=8192'
//}
