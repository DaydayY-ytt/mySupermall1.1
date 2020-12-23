module.exports={
  configureWebpack: {  //自行配置webpack
    resolve:{
      alias:{
        //src的别名为@，默认已定义好
        'assets':'@/assets',  //与CLI2不用，不需要resolve函数，且可以用别名定义新的别名
        'common':'@/common',
        'components':'@/components',
        'network':'@/network',
        'views':'@/views'
      },
    },
  }
}
