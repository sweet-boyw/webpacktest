/*
 * @Author: your name
 * @Date: 2021-12-18 21:49:11
 * @LastEditTime: 2021-12-18 22:05:04
 * @LastEditors: Please set LastEditors
 * @Description: webpack的配置文件，这里面只能使用common.js模块化的规范
 * @FilePath: \webpacktest\webpack.config.js
 */
const path = require('path')//内置路径模块

module.exports = {
    // 入口:项目指定的入口文件
    entry:'./src/main.js',
    // 出口
    output:{
        //打包后文件名
        filename:'app.js',
        //打包文件的输出路径
        path:path.resolve(__dirname,'dist')
    },
    // loader
    // plugins
    // 模式:打包采用的方式:开发模式（development）、生产模式(production)
    mode:'development'
}