$(function() {
	// lunbo
	let w = $("#pageone>.lunbo").width();
	let i = 0;

	$("#pageone>.lunbo>div:nth-of-type(1)").on("swipeleft", function() {
		// clearInterval(timer);
		if (i < 3) {
			$(this).animate({
				left: '-=' + w + 'px'
			}, 300);
			i++;
			$("#pageone> .lunbo>ul>li").eq(i).addClass("now").siblings().removeClass("now");
		}
	});
	$("#pageone>.lunbo>div:nth-of-type(1)").on("swiperight", function() {
		// clearInterval(timer);
		if (i > 0) {
			$(this).animate({
				left: '+=' + w + 'px'
			}, 300);
			i--;
			$("#pageone> .lunbo>ul>li").eq(i).addClass("now").siblings().removeClass("now");
		}
	});
	startTimer();

	var scroleft = true;

	function startTimer() {
		timer = window.setInterval(function() {
			if (scroleft == true) {
				if (i < 3) {
					$("#pageone>.lunbo>div:nth-of-type(1)").animate({
						left: '-=' + w + 'px'
					}, 300);
					i++;
					$("#pageone> .lunbo>ul>li").eq(i).addClass("now").siblings().removeClass("now");
				} else {
					scroleft = false;
				}
			} else {
				if (i > 0) {
					$("#pageone>.lunbo>div:nth-of-type(1)").animate({
						left: '+=' + w + 'px'
					}, 300);
					i--;
					$("#pageone> .lunbo>ul>li").eq(i).addClass("now").siblings().removeClass("now");
				} else {
					scroleft = true;
				}
			}
		}, 2000);
	}
	// lunbo end
	// tab
	// let j=0;
	$("#pagetwo .tab>ul:first-of-type>li").on("click", function() {
		// alert($(this).index());
		let j = $(this).index();
		$("#pagetwo .tab>ul:first-of-type>li").eq(j).addClass("ul").siblings().removeClass("ul");
		$("#pagetwo .tab>ul:last-of-type>li").eq(j).addClass("av").siblings().removeClass("av");
	})
	// tab end

	//生成通讯录
	//
	let li_i = {
		'Angular.js': 'AngularJS 诞生于2009年，由Misko Hevery 等人创建，后为Google所收购。是一款优秀的前端JS框架，已经被用于Google的多款产品当中。',
		CSS: '层叠样式表(英文全称：Cascading Style Sheets)是一种用来表现HTML（标准通用标记语言的一个应用）或XML（标准通用标记语言的一个子集）等文件样式的计算机语言。',
		CSS3: 'CSS3是CSS（层叠样式表）技术的升级版本，于1999年开始制订，2001年5月23日W3C完成了CSS3的工作草案，主要包括盒子模型、列表模块、超链接方式、语言模块、背景和边框、文字特效、多栏布局等模块',
		Javascript: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的编程语言。',
		Html5: 'HTML5是构建Web内容的一种语言描述方式。',
		'Node.js': 'Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。 Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型。',
		"React": 'React 起源于 Facebook 的内部项目，因为该公司对市场上所有 JavaScript MVC 框架，都不满意，就决定自己写一套，用来架设Instagram 的网站',
		Typescript: 'TypeScript是一种由微软开发的自由和开源的编程语言。',
		Wait: '等等一定加,我绝对不是鸽子',
	};
	//插个bug
	// 	function upperJSONKey(jsonObj){
	// 	    for (let key in jsonObj){
	// 						jsonObj[key.toUpperCase()] = jsonObj[key];
	// 						delete(jsonObj[key]);
	// 	    }
	// 	    return jsonObj;
	// 	}
	// let upLi=upperJSONKey(li_i);
	const ordered = {};
	Object.keys(li_i).sort().forEach(function(key) {
		ordered[key] = li_i[key];
	});
	let key = Object.keys(ordered); //获取key值
	let li = '';
	for (let i = 0; i < key.length; i++) {
		// console.log(i);
		li = $('<li><a href="#"><img src="img/' + key[i] + '.jpg"><h2>' + key[i] + '</h2><p>' + ordered[key[i]] +
			'</p></a></li>')
		// console.log(li);
		$('#node').append(li);
	}
	// let li = $('<li><a href="#"><img src="img/f' + i + '.jpg"><h2>' + text + '</h2><p>' + text2 + '</p></a></li><li>');
	//生成通讯录 end
	//点击展开
	$('#pagefour>.ui-content').on('click','div>div:first-of-type',function() {
		if ($(this).next().css('display') == 'none') {
			$(this).next().css("cssText", "display: block !important;");
			$(this).children('div').children('a').removeClass('ui-icon-carat-r').addClass('ui-icon-carat-d');
		} else {
			$(this).next().css("cssText", "display: none !important;");
			$(this).children('div').children('a').removeClass('ui-icon-carat-d').addClass('ui-icon-carat-r');
		}
	})
	//滑动
	let hi = 0;
	$(".box_hd").on("swipeleft", function() {
		// alert(123);
		$(".box_hd>a").css('z-index', '1')
		$(".box_hd>a:nth-of-type(1)").css("cssText", 'z-index:2!important;');
		$(".box_hd>a:nth-of-type(1)").css('width', '0');
		$(".box_hd>a:nth-of-type(1)").animate({
			'width': '100%'
		}, 300);
	});
	$(".box_hd").on("swiperight", function() {
		$(".box_hd>a").css('z-index', '1')
		$(".box_hd>a:nth-of-type(2)").css("cssText", 'z-index:2!important;');
		$(".box_hd>a:nth-of-type(2)").css('height', '0');
		$(".box_hd>a:nth-of-type(2)").animate({
			'height': '100%'
		}, 500);
	});
	$(".box_hd").on("tap", function() {
		$(".box_hd>a").css('z-index', '1')
		$(".box_hd>a:nth-of-type(3)").css("cssText", 'z-index:2!important;');
		$(".box_hd>a:nth-of-type(3)").css('opacity', '0');
		$(".box_hd>a:nth-of-type(3)").animate({
			'opacity': '1'
		}, 300);
	});

	//mock
	Mock.mock('https://www.ai.com', {

		"userInfo|5-8": [{
			"id|+1": 1, 
			"name|1": "@name", 
			"img": "@image('200x150', '@color', '@title')",
			"text|1": "@paragraph()",
			"title|1": "@title(2,4)",
			'time|1': "@date('MM月dd日')",
			"job|1": ["web", "UI", "python", "php","javascript","系统","ok"],
			"dtText|1": ["<p>@paragraph()</p>","<img src='@image('355x200', '@color', '@title')'/>"],
			"number|0-1000": 1000,
			"number2|0-1000": 1000,
			"img2":"@image('70x70', '@color', '@title')",
		}]

	})
	$.get('https://www.ai.com', function(data) {
		console.log(JSON.parse(data).userInfo);
		$.each(JSON.parse(data).userInfo, function(i, item) {
			//创建DOM节点
			$(".box").append('<div><h4>' + this.title + '</h4><div><p>' + this.text + '</p><div><img src="' + this.img +
				'"></div></div><div><span><a href="#" class="ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext">图标</a></span><span><a href="#">' +
				this.name + '</a>' + this.time + '</span></div></div>');
		$(".tab>ul:nth-of-type(2)>li:nth-of-type(2)").append(`<div>
								<div>
									<div>
										<img src="${this.img2}">
									</div>
									<div>
										<div>
											<h4>${this.name}</h4>
											<a href="#" class="ui-btn ui-corner-all ui-icon-bullets ui-btn-icon-notext ui-nodisc-icon ui-alt-icon">图标</a>
										</div>
										<div><a href="#">#Golang</a><span>11-11</span></div>
									</div>
								</div>
								<div>
									<p>
									${this.dtText}
									</p>
								</div>
								<p>
									<span><a href="#" class="ui-btn ui-corner-all ui-icon-action ui-btn-icon-notext">按钮</a>${this.number}</span>
									<span><a href="#" class="ui-btn ui-corner-all ui-icon-comment ui-btn-icon-notext">按钮</a>${this.number2}</span>
									<span><a href="#" class="ui-btn ui-corner-all ui-icon-heart ui-btn-icon-notext">按钮</a>${this.number}</span>
								</p>
							</div>`);
							$(".tab>ul:nth-of-type(2)>li:nth-of-type(3)").append(`<div>
								<div>
									<div>
										<div>${this.number}</div>
										<div>回答</div>
									</div>
									<div>
										<div>
											<a href="#">${this.name}</a>
											<span>${this.time}提问</span>
										</div>
										<h4>
											${this.title}
										</h4>
										<div>
											<span>闲聊</span>
											<span>${this.job}</span>
											<span>BUG</span>
										</div>
									</div>
								</div>
								<div>
									<span>最佳回答:</span>
									<span>${this.text}</span>
								</div>
							</div>`);
		$("#pagefour>.ui-content").append(`<div>
					<div>
						<div>
							<a href="#" class="ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext ui-nodisc-icon ui-alt-icon">图标</a>
							<h4>${this.title}</h4>
						</div>
						<p><span>${this.name}</span>|<span>${this.name}</span></p>
					</div>
					<div>${this.text}</div>
				</div>`);
	})
	})
	//mock end
})
