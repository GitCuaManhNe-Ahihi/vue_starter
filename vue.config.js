module.exports = {
  devServer: {
    proxy: {
      '/platform/api': {
        target: 'http://127.0.0.1:8088',
        changeOrigin: true,
        pathRewrite: {
          '^/platform/api': '/platform/api'
        }
      },
    }
  },
  lintOnSave: false
}
