const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
module.exports = {
    devServer: {
        // overlay: {
        //   warnings: true,
        //   errors: true
        // },
        open: IS_PROD,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            '/api': {
                target: 'http://101.37.70.95:8080/',
                changeOrigin: true,
                pathRewrite:{
                    '^/api':'/'
                }
            },
        },
    }
}