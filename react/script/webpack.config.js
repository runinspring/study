var fs = require('fs');

var path = require('path');
var urlProject = fs.realpathSync('./');
var node_modules = path.resolve(urlProject, 'node_modules');
//console.log(111,__dirname);
//console.log(222,urlProject);
//path.resolve(urlProject, 'src/Main')
config = {
    entry: [
        'webpack/hot/dev-server',
        path.resolve(urlProject, 'src/main2.js')
    ],
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', 'js', 'jsx', '.ts', '.tsx']
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(urlProject, 'app'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015"
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader?presets[]=es2015"
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
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
