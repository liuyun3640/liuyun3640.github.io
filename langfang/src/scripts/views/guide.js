require("../lib/swiper-3.3.1.min.js");
var guideTpl = require("../tpl/guide.string");
SPA.defineView('guide',{
	html:guideTpl,
	plugins:['delegated'],
	bindActions:{
		'goto.index':function(el,data){
			SPA.open('index');
			console.log(33)
		}
	},
	bindEvents:{
		'beforeShow':function(el,data){
			var guideSwiper = new Swiper('.guide-swiper',{
				loop: false
			});
		}
	}
})

