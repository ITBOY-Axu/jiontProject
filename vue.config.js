//  对webpack进行配置   


const baseURL = 'http://m.maoyan.com'  //跨域的地址
const path = require('path')  //node内置模块 path获取目录地址
const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');   //{postcss }用来对css文件进行处理,称之为后处理语言，而我们可以使用postcss中的一个模块pxtorem，便于我们写完样式后自动转换成rem
module.exports = {
    //跨域
    devServer: {
        open: true, //  启动项目自动开启页面
        proxy: {
            //跨域
            '/ajax': {
                target: baseURL,  //跳转到目标地址
                changeOrigin: true //  是否改变源地址为自己的本地地址
            }

        }
    },
    //别名
    chainWebpack: config => {
        config.resolve.alias.set('@', path.join(__dirname, './src'))  //src 的根目录
            .set('assets', path.join(__dirname, './src/assets'))//  assets静态目录
            .set('components', path.join(__dirname, './src/components')) //公共组件
            .set('router', path.join(__dirname, './src/router'))  //路由
            .set('store', path.join(__dirname, './src/store'))  //状态管理
            .set('views', path.join(__dirname, '.src/views')) //路由跳转页面
            .set('utils', path.join(__dirname, './src/utils')) //公共封装库
    }, css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    pxtorem({
                        rootValue: 37.5,
                        propList: ['*'],
                        // 该项仅在使用 Circle 组件时需要
                        // 原因参见 https://github.com/youzan/vant/issues/1948
                        selectorBlackList: ['van-circle__layer']
                    })
                ]
            }
        }
    }
}