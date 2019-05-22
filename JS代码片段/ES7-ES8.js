function noRun(){
    // es6的Generator函数异步
    function* a(){
        yield console.log(1)
        yield console.log(2)
    }
    var aa = a()
    aa.next()
    aa.next()

    // es8的asyns/await异步
    const timeout = async ms => {
        await new Promise((resolve) => {
        setTimeout(resolve, ms);
        });
    }

    async function asyncP(value, ms, ms2) {
        // 顺序执行
        await timeout(ms);
        console.log(value);
        await timeout(ms2);
        console.log(ms2);

        // 并行执行
        await Promise.all([
            timeout(ms),
            timeout(ms2)
        ]);
    }
    asyncP('hello world', 5000, 3000);


    /**
     * ES7 求幂运算符**
     * 在ES5中 == Math.pow(n,m)
     */
    console.log(3**2) // 9

    /** 
     * ES7 Array.prototype.includes(n, idx)方法
     * n是要查找内容，idx是开始查找的下标
     * ( 类似indexOf()方法 )
    */
    let arr = ['react', 'angular', 'vue'];
    console.log(arr.includes('react'))  // true
    console.log(arr.includes('react', 1))  // false

    /**
     * ES8 Object
     * ES8 Object.entries() 方法
     * 将某个对象的可枚举属性与值按照二维数组的方式返回
     * 如果对象的key值是数字，则返回值会对key值进行排序，返回的是排序后的结果
     */
    Object.entries({ one: 1, two: 2 })    //[['one', 1], ['two', 2]]
    Object.entries([1, 2])                //[['0', 1], ['1', 2]]
    // key为数字
    Object.entries({ 3: 'a', 4: 'b', 1: 'c' })    //[['1', 'c'], ['3', 'a'], ['4', 'b']]
    // ES6解构方式结合运用
    let obj = { one: 1, two: 2 };
    for (let [k,v] of Object.entries(obj)) {
        console.log(`${k}: ${v}`);
    }

    /**
     * ES8 Object
     * ES8 Object.values() 方法
     * 只返回自己的键值对中属性的值
     * 顺序规则与Object.entries()一致
     */
    Object.values({ one: 1, two: 2 })            //[1, 2]
    Object.values({ 3: 'a', 4: 'b', 1: 'c' })    //['c', 'a', 'b']

    /**
     * ES8 Object
     * ES8 Object.getOwnPropertyDescriptors('参数', 可选-'属性') 方法
     * 返回目标对象中所有属性的属性描述符，该属性必须是对象自己定义的，不能是从原型链继承来的
     */
    let obj = {
        id: 1,
        name: 'test',
        get gender() {
          console.log('gender')
        },
        set grade(g) {
          console.log(g)
        }
    }
    Object.getOwnPropertyDescriptors(obj, 'id')
    //输出结果为：
    // {
    //     id: {
    //     configurable: true,
    //     enumerable: true,
    //     value: 1,
    //     writable: true
    //     }
    // }
    

    /**
     * ES8 String
     * ES8 字符串填充：padStart(num, '')和padEnd(num, '')
     * 函数通过填充字符串的首尾部来保证字符串达到固定的长度
     */
    'JavaScript'.padStart(8, 'Hi')     //'JavaScript'
    'JavaScript'.padStart(10, 'Hi')    //'JavaScript'
    'JavaScript'.padStart(12, 'Hi')    //'HiJavaScript'
    'JavaScript'.padStart(13, 'Hi')    //'HiHJavaScript'
    'JavaScript'.padStart(12)          //'  JavaScript'

    /**
     * ES8 Function
     * ES8 函数参数列表与调用中的尾部逗号
     * 该特性允许我们在定义或者调用函数时添加尾部逗号而不报错。
     */
    let foo = function (a,b,c,) {
        console.log('a:', a)
        console.log('b:', b)
        console.log('c:', c)
    }
    foo(1, 3, 4, )

    // 技巧
    /**
     * 正则运用
     * 替换标签之间的空格
     * (?= )断言，只匹配一个位置
     */
    var str = '<p>  aa s</p><div id="app">aaa bb</div>'
    // (?=[^>]*(?=<))只匹配以>开头的所有元素,下同
    str = str.replace(/(?=[^>]*[&<])\s+/g, "1")

}

// Run Code测试区

var a,b=6
var c = b;
var Ω = 666;
!function(){
    console.log(Ω)
}()

