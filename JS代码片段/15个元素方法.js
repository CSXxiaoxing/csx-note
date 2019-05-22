1. table 的方法
// 获取table
const tableEl = document.querySelector('table');
/**
 * createTFoot()    在表格中创建一个空的 tFoot 元素
 * createCaption()  为表格创建一个 caption 元素
 * createTHead()    在表格中创建一个空的 tHead 元素
 * deleteCaption() 	从表格删除 caption 元素以及其内容
 * deleteRow()      从表格删除一行
 * deleteTFoot()    从表格删除 tFoot 元素及其内容
 * deleteTHead()    从表格删除 tHead 元素及其内容
 * insertRow()      在表格中插入一个新行
 */
const headerRow = tableEl.createTHead().insertRow();
headerRow.insertCell().textContent = 'Make';
headerRow.insertCell().textContent = 'Model';
headerRow.insertCell().textContent = 'Color';

const newRow = tableEl.insertRow();
newRow.insertCell().textContent = 'Yes';
newRow.insertCell().textContent = 'No';
newRow.insertCell().textContent = 'Thank you';

2. 