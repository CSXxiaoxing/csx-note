// {
//     1.循环类语句
//      for ; while ; switch ; default ; do ; 
//     2.跳出语句
//      break 语句  continue 语句
// }

/**
 * switch 语句 - for 语句 - while 语句 的比较
 * 1. switch 中 default 关键词来规定匹配不存在时做的事情
 * 2. while  中 do 关键词，无论代码是否为真，都会执行一遍
 * 3. 标签定义循环名 如： loop:for(..) break loop; 就是跳出名为loop的循环
 * 4. continue 只能用于跳出循环，break 可跳出循环及其他代码块（非循环需要加上标签）； 
 */
var Aswitch = function(){
    var n;
    switch (n) {
        case 2: // ==> if ( n === 2 )
            console.log(1)
        break;
        case '2':
            console.log(2)
        break;
        default:
        console.log('n与上面case的值都不相等时执行 default 内的代码块')
    }
    // 工作原理：简单的说就是把 n 的值与case 后的值进行对比，当 n===(case后的值时) 执行case内代码块
    
}

var Bfor = function(){
    // for
    // for - 循环代码块一定的次数
    // for/in - 循环遍历对象的属性

    // 第一种 for 循环 
    for (var i=0; i<5; i++) {
        x=x + "The number is " + i + "<br>";
    }
    // for (语句 1; 语句 2; 语句 3)
    //   {
    //   被执行的代码块
    //   }
    //   语句 1 在循环（代码块）开始前执行
    //   语句 2 定义运行循环（代码块）的条件
    //   语句 3 在循环（代码块）已被执行之后执行
    
    // 第二种 for 循环 
    var i=0,len=cars.length;
    for (; i<len; ) {
        document.write(cars[i] + "<br>");
        i++; // 语句三
    }
    // 把语句 1 和语句 3 抽离出来
    
    // for in 循环
    var person={fname:"John",lname:"Doe",age:25};
    
    for (x in person) {
        txt=txt + person[x];
    }
    // x是属性名，person[x]得到属性值
}

var Cwhile = function(){
    // while - 当指定的条件为 true 时循环指定的代码块
    // do/while - 同样当指定的条件为 true 时循环指定的代码块
    // while (条件) {
    //     需要执行的代码
    // }
    while (i<5) {   // 如果条件为真，那就继续执行
        x=x + "The number is " + i + "<br>";
        i++;
    }
    // 如果您忘记增加条件中所用变量的值，该循环永远不会结束。该可能导致浏览器崩溃

    // do/while 循环
    do {
        x=x + "The number is " + i + "<br>";
        i++;
    }
    while (i<5);
    // do/while 循环是 while 循环的变体。该循环会执行一次代码块，在检查条件是否为真之前，然后如果条件为真的话，就会重复这个循环

}

// 跳出循环
// break 语句用于跳出循环。  // 跳出整个循环
// continue 用于跳过循环中的一个迭代。 // 跳出当前次循环，进入下一个循环

// 标签的用法
// continue 语句（带有或不带标签引用）只能用在循环中。
// break 语句（不带标签引用），只能用在循环或 switch 中。
// 通过标签引用，break 语句可用于跳出任何 JavaScript 代码块：
continue 语句只能用于循环;
break 不带标签时只能用于循环,带标签可用于任何代码块,例如:
cars=["BMW","Volvo","Saab","Ford"];
list: {
    console.log( cars[0] );
    console.log( cars[1] );
    console.log( cars[2] );
    break list; // 跳出list标签-代码块
    console.log( cars[3] );
    console.log( cars[4] );
    console.log( cars[5] );
}
// 输出：
// 1. BMW
// 2. Volvo
// 3. Saab

// 为循环制定标签名=>
var text = "";
var i, j;  // => var i; var j
Loop1: // 第一个循环标签 "Loop1"
for (i = 0; i < 3; i++) {
text += "<br>" + "i = " + i + ", j = ";

    Loop2: // 第二个循环标签 "Loop2"
    for (j = 10; j < 15; j++) {
        if (j == 12) {
            break Loop1;
        }
        console.log( text += j + " " );
    }
}
