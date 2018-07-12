// 路由参数request的7个属性2个方法
属性：
1  request.headers
    => 输出请求头 如：
    { host: 'localhost:666',
      connection: 'keep-alive',
      'content-length': '34',
      origin: 'http://localhost:8721',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36',
      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      accept: '*/*',
      referer: 'http://localhost:8721/',
      'accept-encoding': 'gzip, deflate, br',
      'accept-language': 'zh-CN,zh;q=0.8' }

2  request.params
    => 请求的网站 http://localhost:666/user/a/123
       输出：{ '0': '/user/a/123' } // 输出/后的值

3  request.url
    => 输出网址后面的所有参数如：http://localhost:666/user/?12&id=10&ids=5
       输出：'/user/?12&id=10&ids=5'

4* request.method
    => 输出请求方式，如 "GET" "POST"

5* request.query
    => 输出网址后参数集：http://localhost:666/user/?12&id=10&ids=5
        输出：{ '12': '', id: '10', ids: '5' }

6* request.cookies
    => 如果有cookie，会输出cookie

7* request.body
    => 输出发送过来的参数 如：请求->
    前端 - http.post('/user',{type: 'select',class: 'html'})
    nodeJs - request.body 输出 => { type: 'select', class: 'html'}

方法：
1、request.params()
这个方法是用来获取请求数据的。比如
request.params(id)
然后，就会先使用params属性找这个id值，若没有就会在通过body属性去找，若还没有就使用query去找。

2、request.get()
这个方法是用来获取request.header中属性值，看一下header信息：
// 看上方header    
通过下面这行代码：
request.get('origin')
输出 'http://localhost:8721'

        



