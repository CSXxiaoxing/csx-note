// 新知识
1. Javascript 是用 Unicode （ASCII+Latin-1的超集） 字符集写的

2. Javascript 区分大小写； HTML 不区分大小写（标签和属性名等） ---XHTML例外，区分大小写

3. Unicode的转义序列，\u + 4个16进制数（数字或大小写字母A~F）

4. JavaScript支持的注释 ：  /* */ 和 // 
    ( jsDoc 中，支持的是 /** */ )

5. 直接量：Number(整数和浮点数), Boolean, String, /JavaScript/gi (正则区配出来的直接量), null
    \顾名思义，直接量就是可以直接使用的数据，不需要进行引用和取值。

6. 标识符： 字母/$/_ 开头,后续可跟 字母/$/_/数字（数字不可做开头）
    Mn类Mc类Pc类 也被允许,如 Π あ Ц // 输入法中输入i，然后点击特殊字里的字母里的所有字母

7. 保留字：
    break ; delete ; function ; return ; typeof ; case ; do ; if ;
    switch ; var ; catch ; else ; in ; this ; void ; continue ;
    false ; true ; instanceof ; throw ; while ; debugger; 
    finally ; new ; with ; default ; for ; null ; try ;

   严格模式下的保留字：
    implements ; let ; private ; public ; yield ; package ; protected ; static ; //interface(影响编辑器颜色渲染规则，故注释) ;

   严格模式下的不完全保留字：// 不可用于变量名、函数名、参数名
    arguments ; eval ; 

   关键字：// ECMAscript3
    abstract ; double ; goto ; native ; static ; boolean ; enum ; implements ; package ; super ;
    byte ; export ; import ; private ; synchronized ; char ; extends ; int ; protected ; throws;
    class ; final ; interface ; public ; transient ; const ; float ; long ; short ; volatile ;

   关键字：// ECMAscript5
    class ; const ; enum ; export ; extends ; import ; super ;

   Javascript 预定义全局变量及函数：// 避免使用以免污染
    arguments ; encodeURI ; Infinity ; Number ; RegExp ; Array ; Boolean ; Date ;
    decodeURI ; decodeURIComponent ; encodeURIComponent ; Error ; eval ; EvalError ;
    Function ; isFinite ; isNaN ; JSON ; Math ; NaN ; Object ; parseFloat ; parseInt ;
    RangeError ; ReferenceError ; String ; SyntaxError ; TypeError ; undefined ; URIError ;
