var fn_Util = {
	dataFormat: function (arr) {
	    var newArr = [];
	    for (var i = 0; i < Math.ceil(arr.length/3); i++) {
	      newArr[i] = [];
	      newArr[i].push(arr[i*3]);
	      newArr[i].push(arr[i*3+1]);
	      newArr[i].push(arr[i*3+2]);
	    }
	    return newArr;  
   },
    pullTofresh : function(opts){
		var that=this;
		var vm = opts.view.vm;
		var myScroll = opts.view.myScroll || {};
		var hideHeight = opts.hideHeight || 35;
		myScroll.scrollTo(0, -hideHeight);
	    var head = $('.head img'),
	        topImgHasClass = head.hasClass('up');
	    var foot = $('.foot img'),
	        bottomImgHasClass = head.hasClass('down');
	    myScroll.on('scroll', function () {
	        var y = this.y,
	            maxY = this.maxScrollY - y;
	        if (y >= 0) {
	            !topImgHasClass && head.addClass('up');
	            return '';
	        }
	        if (maxY >= 0) {
	            !bottomImgHasClass && foot.addClass('down');
	            return '';
	        }
	    });
	
	    myScroll.on('scrollEnd', function () {
	        if (this.y >= -hideHeight && this.y < 0) {
	            myScroll.scrollTo(0, -hideHeight);
	            head.removeClass('up');
	        } else if (this.y >= 0) {
	            head.attr('src', '/langfang/images/home/ajax-loader.gif');
	            //TODO ajax下拉刷新数据
	            var time=new Date;
            	var hour = time.getHours();
            	var fen = time.getMinutes();
            	var miao = time.getSeconds();
            	vm.time = hour+":"+fen+":"+miao;
	            setTimeout(function () {
	                myScroll.scrollTo(0, -hideHeight);
	                head.removeClass('up');
	                head.attr('src', '/langfang/images/home/arrow.png');
	            }, 1000);
	        }   
        })
	}
}
module.exports = fn_Util;