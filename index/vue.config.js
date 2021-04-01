
module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://101.37.70.95:8080/',
                ws:true,
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'/'
                }
            },
        },
    }
}