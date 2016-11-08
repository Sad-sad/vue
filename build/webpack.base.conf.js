var path = require('path');
var webpack = require("webpack")

module.exports = {
    entry: './src/main',
    //输出位置
    output: {
        path: path.join(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        // 加载器
        loaders: [
            // 解析.vue文件
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            // 转化ES6的语法
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: /node_modules/
            },
            // 编译css并自动添加css前缀
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            // 图片转化，小于8K自动转化为base64的编码
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192'
                /*query: {
                    limit: 10000,
                    name: './images/[name].[ext]?[hash:8]'
                }*/
                //在这无论是直接loader 后面跟参数(像url跟参一样),或者是后面跟着一个对象 query,都是可以的.类似get请求？
            },
            //html模板编译？
            {
                test: /\.(html|tpl)$/,
                loader: 'html-loader'
            },
        ]
    },
    vue: {
        loaders: {
            css: 'style!css!autoprefixer'
        }
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    },
    resolve: {
        // require时省略的扩展名，如：require('module') 不需要module.js
        extensions: ['', '.js', '.vue'],
        // 别名，可以直接使用别名来代表设定的路径以及其他
        alias: {
            filter: path.join(__dirname, './src/filters'),
            components: path.join(__dirname, './src/components'),
            $: "zepto"
        }
    },
    // 开启source-map调试模式，webpack有多种source-map，在官网文档可以查到
    devtool: 'eval-source-map'
};
