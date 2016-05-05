var myTpl = require("../tpl/my.string");
SPA.defineView('my',{
	html:myTpl,
	plugins:["delegated"],
	bindActions:{
		'switch.login':function(){
			SPA.show('loginin');
		}
	},
	bindEvents:{
		
	}
});
