'use strict';
var path = require('path');
var fs = require('fs');
var cheerio = require('cheerio');
// var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var INDEX_FILE = './src/index.html';
var MAIN_PATH = path.join(__dirname, './src/main.js');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
    entry: MAIN_PATH,
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        filename: '[name].[hash].js'
    },
    //新建一个开发服务器，可以serve我们pack以后的代码，并且当代码更新的时候自动刷新浏览器。
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
    },
    //webpack使用loader的方式来处理各种各样的资源，比如说样式文件.
    module: {
        loaders: [{
            test: /\.css$/,
            loaders: ['style', 'css'],
            include: APP_PATH
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=40000'
        }, {
            test: /\.js?$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            },
            exclude: /node_modules/
        }]
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        // new HtmlwebpackPlugin({
        //     title: 'Hello World app'
        // }),
        // new webpack.optimize.OccurenceOrderPlugin(),
        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NoErrorsPlugin(),
        function() {
            // 插件执行完毕
            // this.plugin('done',function(stats){

            //     // console.error('webpack plugin done: ' + JSON.stringify(arguments));
            //     // 读取 首页 html
            //     fs.readFile(INDEX_FILE, function(err, data){
            //         // 获得 html 文本
            //         var html = data.toString();
            //         // 替换 bundle.hash.js 文本
            //         html = html.replace(/javascripts\/main\.[^\.]+\.js/, 'main.' + stats.hash + '.js');
            //         // 将新值，重写入首页
            //         fs.writeFile(INDEX_FILE, html, function(err){
            //             !err && console.log('Set has success: ' + stats.hash);
            //         });
            //     });
            // });
            // 插件执行完毕
            this.plugin('done', function(stats){
                // 读取 首页 html
                fs.readFile(INDEX_FILE, function(err, data){
                    // 获得 html 文本
                    var $ = cheerio.load(data.toString());
                    // 替换 bundle.hash.js 文本
                    $('script[src*=main]').attr('src', 'main.' + stats.hash + '.js');
                    // 将新值，重写入首页
                    fs.writeFile(INDEX_FILE, $.html(), function(err) {
                        !err && console.log('Set has success: ' + stats.hash);
                    })
                })
            })
        }
    ]
};
