var fs = require('fs');

var path = require('path');
var urlProject = fs.realpathSync('./');
var node_modules = path.resolve(urlProject, 'node_modules');

//var lessonPath = 'src/lesson1/Index';
var lessonPath = 'src/lesson2/Index';
//var lessonPath = 'src/combineReducers/App';
config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(urlProject, lessonPath)
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
            {
                test: /\.css$/, // Only .css files
                loader: 'style!css' // Run both loaders
            },
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
