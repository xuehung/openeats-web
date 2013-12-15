$(function(){
	
	var NN=0;
	var MOVE=0;
	
	$(".slider-num li").eq(0).addClass("num-hover");

	function GOGO(){
		if(NN<2){
			NN += 1;
			MOVE = NN*460*-1;
		}else{
			NN=0;
			MOVE=0;
		}
		$(".device-slider ul").animate({top:MOVE},800,"easeInOutBack");
		$(".slider-num li").removeClass().eq(NN).addClass("num-hover");
	}
	
	var TT = setInterval(GOGO,3000);
	
	$(".slider").hover(function(){ clearInterval(TT);}, function(){TT = setInterval(GOGO,3000);});
	
	$(".slider-num li").click( function(){
		NN = $(this).index();
		MOVE = NN*460*-1;
		$(".device-slider ul").animate({top:MOVE},500,"easeInOutBack");
		$(this).addClass("num-hover").siblings().removeClass();
	});
	
});