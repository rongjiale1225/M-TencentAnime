const porxy=require('http-proxy-middleware');

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    middleware: [ // 中间件 http-proxy-middleware
        porxy('/tencent',{
            target:'https://m.ac.qq.com',
            changeOrigin:true,
            pathRewrite:{'^/tencent' : ''}
        })
        
    ],
    proxies: [
        // { source: '/api', target: '' }
    ]
}

module.exports = serverConfig