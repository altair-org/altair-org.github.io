$(document).ready(function() {



	$("html").niceScroll();
	
	$(".fancybox").fancybox();

	$("a.scroll").click(function() {
		$.scrollTo($(".olya_cont"), 800, {
			offset: 0
		});
	});

	

	
	

});