


require.config({
    paths:{
        common:'../js/common'
    }

})

require(['common'],function(sx){
    console.log(sx.yanzhengma(6))
})