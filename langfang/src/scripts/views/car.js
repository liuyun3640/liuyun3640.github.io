var carTpl = require("../tpl/car.string");
SPA.defineView('car',{
	html:carTpl,
	plugins:["delegated"],
	bindActions:{
		'switch.login':function(){
			SPA.show('loginin');
		}
	},
	bindEvents:{
		
	}
});
