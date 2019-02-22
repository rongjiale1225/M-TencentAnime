

const serverConfig = {
    livereload: {
        enable: true
    },
    directoryListing: false,
    open: false,
    port: 3000,
    middleware: [ // 中间件 http-proxy-middleware
        
    ],
    proxies: [
        // { source: '/api', target: '' }
    ]
}

module.exports = serverConfig