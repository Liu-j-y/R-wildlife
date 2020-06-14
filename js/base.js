$(document).ready(function(){
	$(window).scroll(function(){
		var top=$(".content").offset().top;
		var scrollTop=$(window).scrollTop();
		if(scrollTop>(top-200)){
			$(".header").css("opacity",10);
		}else{
			$(".header").css("opacity",0.85);
		}
		if(scrollTop>(top/5)){
			$(".logo").slideUp(1000);
		}else{
			$(".logo").slideDown(1000);
		}
	})
		
	$('a.topSlideMenu').click(function(){
		if($('.topSlideMenuNav').is(':visible')){
			$('.topSlideMenuNav').hide();
			}else{
				$('.topSlideMenuNav').show();
			}			
		return false;
	});

	$('.all>li').hover(function(e) {
        $(this).children().stop().slideToggle()
    });

})
