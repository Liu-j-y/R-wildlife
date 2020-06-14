
// 	/*轮播图banner*/
// 	$("#carousel_1").FtCarousel();
	
// 	/*con_01*/
// 	$(".con1 .noactive1:eq(1)").css({"width":"435px"});
// 	$(".con1 .noactive1").hover(function(){
// 		$(this).stop().animate({"width":"435px"}, 500);
//     	$(this).siblings().stop().animate({"width":"380px"}, 500);
// 		$(this).find("img").stop().animate({"top":"-160px"},400); 
// 		$(this).find("span").css({"background-color":"#000"}); 
// 		$(this).find(".text").fadeIn(300); 
// 	},function(){
// 		$(this).stop().animate({"width":"435px"}, 500);
//     	$(this).siblings().stop().animate({"width":"380px"}, 500);
// 		$(this).find(".text").hide();
// 		$(this).find("img").stop().animate({"top":"0px"},500); 
// 		$(this).find("span").css({"background-color":"#333", "color":"#dedede"}); 
// 	});

// 	$(".con2 .noactive2:eq(1)").css({"width":"900px"});
// 	$(".con2 .noactive2:eq(1)").find("span.overlay").css({"display":"none"});
// 	$(".con2 .noactive2:eq(1)").find(".con_con").css({"display":"block"});
// 	$(".con2 .noactive2").mouseover(function(){
// 		$(this).stop().find(".con_con").fadeIn(100);
// 		$(this).find("span.overlay").hide(100);
// 		$(this).stop().siblings().find("span.overlay").fadeIn(100);
// 		$(this).stop().animate({"width":"900px"}, 500);
//     	$(this).siblings().stop().animate({"width":"150px"}, 500);

// 	}).mouseout(function(){
// 		$(this).stop().find(".con_con").fadeIn(100);
// 		$(this).stop().siblings().find(".con_con").hide(100);
// 		$(this).stop().find("span.overlay").hide(100);
// 		$(this).stop().siblings().find("span.overlay").fadeIn(100);
// 		$(this).stop().animate({"width":"900px"}, 500);
//     	$(this).siblings().stop().animate({"width":"150px"}, 500);
// 	});
