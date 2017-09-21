


define(function(){
	return {
		yanzhengma:function(num){
			// 验证码
			if(num === undefined){
				num = 4;
			}
			var arr = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
			// 循环获取验证码
			var res = '';
			for(var i=0;i<num;i++){
				var idx = parseInt(Math.random()*arr.length);
				res += arr[idx];
			}
			return res;

		},
		randomNumber:function (min,max){
			var res = parseInt(Math.random()*(max-min+1)) + min;
			 // * [生成一个随机整数]
			return res
		},
		randomColor:function (){
			var str = '0123456789abcdef';
			// 随机颜色
			var res = '#';
			for(var i=0;i<6;i++){
				var idx = Math.floor(Math.random()*str.length);
				res += str[idx];
			}
			return res;
		},
		getElement:function (nodes){
			// 过滤其他节点，得到元素节点
			var res = [];
			for(var i=0;i<nodes.length;i++){
				if(nodes[i].nodeType === 1){
					res.push(nodes[i]);
				}
			}

			return res;
		},
		firstElementChild:function (parent){
			var res = getElement(parent.childNodes);
			return res[0];
		},
		lastElementChild:function (parent){
			var res = getElement(parent.childNodes);
			return res[res.length-1];
		},
		nextElement:function (ele){
			var res = ele.nextSibling;

			// 判断res是否为元素节点，并且不是最后一个元素
			while(res.nodeType !== 1 && res != ele.parentNode.lastChild){
				res = res.nextSibling;
			}
			return res;
		},
		getElementsByClassName:function (className){
			//不用判断是否为ie8以下的浏览器
			//推荐：判断当前浏览器是否支持改方法
			if(document.getElementsByClassName){
				return document.getElementsByClassName(className);
			}

			//IE8以下浏览器
			//思路：利用getElementsByTagName('*')
			else{
				var res = [];
				var eles = document.getElementsByTagName('*');

				for(var i=0;i<eles.length;i++){
					if(eles[i].className.indexOf(className)>=0){
						res.push(eles[i]);
					}
				}

				return res;
			}
		},
		getStyle:function (ele,attr){
			// 获取css样式
			var res = '';
			// 标准浏览器
			if(window.getComputedStyle){
				res = getComputedStyle(ele)[attr];
			}

			// ie8-
			else if(ele.currentStyle){
				res = ele.currentStyle[attr];
			}

			// 其他浏览器
			else{
				res = ele.style[attr];
			}

			return res;
		},
		bind:function (ele,type,handler,capture){
			// 标准浏览器-事件绑定方法，兼容所有浏览
			if(ele.addEventListener){
				ele.addEventListener(type,handler,capture);
			}

			// ie8-
			else if(ele.attachEvent){
				ele.attachEvent('on'+type,handler)
			}

			// 其他浏览器
			else{
				ele['on' + type] = handler;
			}
		},
		/*
			增：Cookie.set()
			删：Cookie.remove()
			查：Cookie.get()
			改：Cookie.set()
		 */
		Cookie:{
			/**
			 * [获取cookie]
			 * @param  {String} name [cookie名]
			 * @return {String}      [cookie名对应的值]
			 */
			get:function(name){
				var res = '';
				var cookies = document.cookie;
				if(cookies.length>0){
					cookies = cookies.split('; ');
					cookies.forEach(function(cookie){
						var temp = cookie.split('=');
						if(temp[0] === name){
							res = temp[1];
						}
					})
				}
				return res;
			},

			/**
			 * [设置cookie]
			 * @param {String} name  [cookie名]
			 * @param {String} value [cookie值]
			 * @param {[Object]} opt   [cookie参数：exipres,path,domain]
			 */
			set:function(name,value,opt){
				var cookieStr = name + '=' + value;
				if(opt !== undefined){
					for(var attr in opt){
						cookieStr += ';'+attr + '=' + opt[attr]
					}
				}

				document.cookie = cookieStr;
			},

			// 删除cookie
			remove:function(name){
				var date = new Date();
				date.setDate(date.getDate()-10);
				// document.cookie = name + '=x;expires=' + date.toUTCString();
				this.set(name,'x',{expires:date.toUTCString()});
			}
		},
		animatefunction (ele,opt,callback){
			// 记录动画数量
			let timerLen = 0;

			// 遍历opt
			for(var attr in opt){
				// 如何把attr限定到局部作用域中
				// ES6解决方案：用let声明attr
				// 传统解决方案：利用函数传参

				createTimer(attr);

				timerLen++;
			}

			function createTimer(attr){
				// 为每个属性设置不同的定时器(关键1)
				let timerName = attr + 'timer';
				let target = opt[attr];

				clearInterval(ele[timerName]);

				// 把定时器与Dom关联（关键2）
				ele[timerName] = setInterval(()=>{
					// 先获取当前值
					let current = getComputedStyle(ele)[attr];//String:100px,50rem,0.5,60deg

					// 提取数值：单位
					// 根据当前值提取单位(单位在current最后面)
					let unit = current.match(/[a-z]+$/);
					if(unit){
						current = current.substring(0,unit.index)*1;
						unit = unit[0]
					}else{
						unit = '';
						current *= 1;
					}

					// 计算速度
					let speed = (target - current)/10;

					// 处理speed值，防止speed为小数而造成定时器无法完成的情况
					// 0.3=>1,-0.3=>-1
					speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


					if(attr === 'opacity'){
						speed = speed>0 ? 0.05 : -0.05;
					}

					// 动画完成
					if(current === target){
						clearInterval(ele[timerName]);
						current = target - speed;

						timerLen--;

						if(typeof callback === 'function' && timerLen === 0){
							callback();
						}
					}

					ele.style[attr] = current + speed + unit;
				},30)
			}
		},
		/**
		 * [ajax异步请求的封装]
		 * @param  {Object} options [请求参数]
		 * 支持jsonp请求
		*/
		ajax:function (options){
			// 默认值
			var defaults = {
				type:'get',//post,put,delete,jsonp...
				async:true,
				callbackName:'callback'
			}

			// 扩展默认参数
			// var opt = Object.assign(defaults,options);
			for(var attr in options){
				defaults[attr] = options[attr];
			}
			var opt = defaults;
			opt.type = opt.type.toLowerCase();


			// 处理参数
			// data:{pageNo:1,qty:10} => 'pageNo=1&qty=10'
			if(opt.data){
				var params = '';
				for(var attr in opt.data){
					params += attr + '=' + opt.data[attr] + '&'
				}

				// 去除多余的&
				params = params.slice(0,-1);
			}

			// 根据请求类型定义url
			if(opt.type === 'get' || opt.type === 'jsonp'){
				var fuhao = opt.url.indexOf('?')>=0 ? '&' : '?';

				opt.url += fuhao + params;


				// opt.url += '?' + params;//../api/football.php?name=laoxie?pageNo=1&qty=10
				params = null;
			}


			// /api/jsonp.php?name=laoxie&pageNo=1&qty=10&callback
			// 当同时发起多个jsonp请求时
			if(opt.type === 'jsonp'){
				// var fnName = 'getData' + parseInt(Math.random()*10000000);
				var fnName = 'getData' + new Date().getTime();

				// 1.预设全局函数
				window[fnName] = function(data){
					// 处理数据
					if(typeof opt.success === 'function'){
						opt.success(data);
					}

					// 删除script节点
					script.parentNode.removeChild(script);

					// 删除全局函数
					delete window[fnName];
				}

				// 2.生成script标签,并写入页面
				var script = document.createElement('script');
				script.src = opt.url + '&'+opt.callbackName + '='+fnName;
				document.head.appendChild(script);


				return;
			}



			// ajax请求
			var xhr;

			// 兼容xhr异步请求对象
			try{
				xhr = new XMLHttpRequest();
			}catch(error){
				try{
					xhr = new ActiveXObject("Msxml2.XMLHTTP");
				}catch(err){
					try{
						xhr = new ActiveXObject("Microsoft.XMLHTTP");
					}catch(e){
						alert('你的浏览器太Low了，赶紧升级谷歌浏览器');
					}
					
				}
			}

			xhr.onreadystatechange = function(){
				if(xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)){
					var res;
					try{
						res = JSON.parse(xhr.responseText);
					}catch(err){
						res = xhr.responseText;
					}

					if(typeof opt.success === 'function'){

						opt.success(res);
					}
				}
			}


			xhr.open(opt.type,opt.url,opt.async);

			// 如果post请求，必须设定请求头
			if(opt.type != 'get'){
				xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
			}

			xhr.send(params);
		},
		type:function (data){
			// 判断数据类型
			return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
		}
	}
})
