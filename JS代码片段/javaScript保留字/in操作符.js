/**
 * in 语句分单独使用和for-in循环中使用
 * -这里介绍的是单独使用的用法
 * -- in 操作符用来判断属性是否存在与对象中
 */

// 在单独使用时， in 操作符会在通过对象能够访问给定属性时返回 true ，无论该属性存在于实例中还是原型中
function FF() {
    this.age = 11;
}
FF.prototype.name = "kevin";

// in用来判断该属性是否存在在该对象中
var flag1 = "age" in new FF()?"存在":"不存在";
var flag2 = "name" in new FF()?"存在":"不存在";
console.log(flag1, flag2); // 存在 存在


// 数组
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // 返回true
3 in trees        // 返回true
6 in trees        // 返回false
"bay" in trees    // 返回false (必须使用索引号,而不是数组元素的值)
"length" in trees // 返回true (length是一个数组属性)
Symbol.iterator in trees // 返回true (数组可迭代，只在ES2015+上有效)


// 内置对象
"PI" in Math          // 返回true

// 自定义对象
var mycar = {make: "Honda", model: "Accord", year: 1998};
console.log("make" in mycar)  // 返回true
console.log("model" in mycar) // 返回true
console.log("Honda" in mycar) // 返回false 不是属性名

// in右操作数必须是一个对象值。例如，你可以指定使用String构造函数创建的字符串，但不能指定字符串文字。
var color1 = new String("green");
"length" in color1 // 返回true
var color2 = "coral";
"length" in color2 // 报错(color2不是对象)

// 如果你使用 delete 运算符删除了一个属性，则 in 运算符对所删除属性返回 false。
var mycar = {make: "Honda", model: "Accord", year: 1998};
delete mycar.make;
"make" in mycar;  // 返回false

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
delete trees[3];
3 in trees; // 返回false

// 如果你只是将一个属性的值赋值为undefined，而没有删除它，则 in 运算仍然会返回true。
var mycar = {make: "Honda", model: "Accord", year: 1998};
mycar.make = undefined;
"make" in mycar;  // 返回true

var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
trees[3] = undefined;
3 in trees; // 返回true

// 如果一个属性是从原型链上继承来的，in 运算符也会返回 true。
"toString" in {}; // 返回true