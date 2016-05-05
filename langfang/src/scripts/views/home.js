  require('../lib/swiper-3.3.1.min.js');
var fnUtil = require('../util/fn-util.js');
var homeTpl = require("../tpl/home.string");
SPA.defineView('home',{
	html:homeTpl,
	plugins:["delegated",{
		name: 'avalon',
		options: function (vm) {
			vm.bannerlist = [];
			vm.navlist = [];
			vm.navlist1 = [];
			vm.homepro = [];
			vm.homepros = [];
			vm.originLivelist = [];
			vm.time = "";
		}
	}],
	init:{
		vm:null,
		myScroll : null,
		hideHeight:35,
    handler : "#homescroll"
	},
	bindAction:{
	
	},
	bindEvents:{
		'beforeShow':function(){
			var self = this;
			self.vm=self.getVM();
			
			$.ajax({
				url:"http://home.com/langfang/src/scripts/json/home.json",
				success:function(data){
					self.vm.bannerlist = data.banner;
					self.vm.navlist = data.navimg;
					self.vm.navlist1 = data.navimg1;
					self.vm.homepro = data.homepro;
					self.vm.homepros =fnUtil.dataFormat(data.homepros);
					setTimeout(function(){
	    			  	self.myScroll.refresh();
	    			  	self.myScroll.scrollTo(0, -self.hideHeight);
    			    },0);
					var bannerSwiper = new Swiper("#banner-swiper",{
						loop:false,
						autoplay:1000,
						pagination: '.swiper-pagination',
						paginationClickable :true
					});
				}
			});
			self.myScroll = new IScroll(self.handler, {
		        probeType: 3,
		        mouseWheel: true
		    });
		    fnUtil.pullTofresh({
		     	view: self
		    });
		}
	}
});
