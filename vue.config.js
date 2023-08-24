const { defineConfig } = require('@vue/cli-service')

let config = {
  outputDir: './dist',
  css: {
    sourceMap: true,
    loaderOptions: {
      css: {
        url: true
      },
      sass: {
        additionalData: `$imagePath: '${process.env.VUE_APP_IMAGE_PATH}';
				@import "@/scss/common.scss";`
      }
    }
  },
  
  // devServer: {
  //   contentBase: '.',  																														// 정적 파일을 제공하는 기본 디렉터리로 이 경우, 현재 디렉토리로 설정
  //   watchOptions: {
  //     ignored: ['**/db.json']    																									// db.json파일을 감지에서 제외
  //   },
  //   proxy: {  																																		// 특정 경로로 들어오는 요청을 다른 서버로 전달하는 역할
  //     '/api/': {
  //       target: 'http://localhost:8079',
  //       pathRewrite: { '/api': '' },
  //       changeOrigin: true,
  //       logLevel: 'debug',
  //     },
  //   },
  // },
  configureWebpack: {
    plugins: []
  },
  filenameHashing: false,
  lintOnSave: false
};
module.exports = config
