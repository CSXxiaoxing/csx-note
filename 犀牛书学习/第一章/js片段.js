
/**
 * 隐藏时是否占位
 * @param {Node} ele - 元素节点
 * @param {Boolean} reflow 
 */
function hide(ele, reflow){
    if (reflow) {
        ele.style.display = "none"
    } else {
        ele.style.visibility = "hidden"
    }
}


