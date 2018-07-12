
// nodeJS是单线程，异常未捕获的话会被终止
1 全局捕获异常

process.on('uncaughtException',function(err){
    console.log(err)
}) //监听未捕获的异常
process.on('unhandledRejection',function(err, promise){
    console.log(err)
}) //监听Promise没有被捕获的失败函数



2 try方法防止异常

try {
    if (error) throw error
    else callback(true);
} catch(e) {
    callback(false)
}