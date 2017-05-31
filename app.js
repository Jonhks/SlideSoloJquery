var numeroImg = 0;
var stop = false;

$(document).ready(function(){
	$("#indicador li").click(function(){
		var numeroSlide = $(this).attr("data-foto");
		$("#slide ul li").css({"display":"none"});
		$("#slide ul li:nth-child("+numeroSlide+")").fadeIn();
		stop = true;
		numeroImg=numeroSlide;
	});

function avanzar(){
		if(numeroImg >4){
			numeroImg = 1;
		}else{
		numeroImg ++;
		}
		$("#slide ul li").css({"display":"none"});
		$("#slide ul li:nth-child("+numeroImg+")").fadeIn();
		console.log(numeroImg);
};

	$("#right").click(function(){
		avanzar();
		stop = true;
	});

	$("#left").click(function(){
		if(numeroImg <=1){
			numeroImg = 5;
		}else{
		numeroImg --;
		}
		$("#slide ul li").css({"display":"none"});
		$("#slide ul li:nth-child("+numeroImg+")").fadeIn();
		console.log(numeroImg);
		stop = true;

	});

	setInterval(function(){
		if (stop) {
			stop = false;
		}else
		{
		avanzar();
		}
	},3000);
})