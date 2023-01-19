const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 配置node.js服务器配置表
module.exports = {
  devServer: {
      host:'localhost',
      port:8080,
      proxy:{
        // 代理
        '/api': {
          target:'https://www.imooc.com',
          changeOrigin: true,
          pathRewrite:{
              
          }
        }
      }
  }
}