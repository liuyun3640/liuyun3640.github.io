var indexTpl = require("../tpl/index.string");
SPA.defineView('index',{
	html:indexTpl,
	plugins:['delegated'],
	modules:[{
		name:'indexContent',
		container:'.index-content',
		views:['home','search','car','my'],
		defaultTag:'home'
	}],
	bindActions:{
		'tag.switch':function(e,data){
			this.modules.indexContent.launch(data.tag);
			$(e.el).addClass('active').siblings().removeClass('active');
		}
	},
	bindEvents:{
		
	}
})
