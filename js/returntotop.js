// Scroll Top 

$( document ).ready(function(initialload) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 60) {        
			$('#scroll_top').fadeIn(225);    
		} else {
			$('#scroll_top').fadeOut(225);   
		}
	});
	$('#scroll_top').click(function() {      
		$('body,html').animate({
			scrollTop : 0                      
		}, 550);
	});
});

