// Nav Links Scroll Down
$(document).ready(function (){	
	$('a').click(function(){
		$('html, body').animate({
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});
});

// Scroll Top Arrow
$( document ).ready(function(initialload) {
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 75) {        
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