var logininTpl = require("../tpl/loginin.string");
SPA.defineView('loginin',{
	html:logininTpl,
	plugins:["delegated"],
	bindActions:{
		'cnacle':function(){
			this.hide();
		}
	},
	bindEvents:{
		
	}
});







