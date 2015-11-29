// Show Top Nav Bar
function pageScroll() {
	if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
		var topNav = document.getElementById("navShow");
		topNav.style.visibility = "visible";
    	document.getElementsByTagName("body")[0].style.paddingTop = "50px";  // adjusts for nav bar height
	}
}

// Show Skills
var skills = ["html5", "css3", "js", "jquery", "git", "bootstrap"]; // ** Add more boxes to the array here
function loadSkills() {
  for (var i = 0; i < skills.length; i++) {
      document.getElementById("skills_loop").innerHTML += "<div class='col-xs-6 col-md-3'><a href='JavaScript:void(0)' class='thumbnail'><img src='images/skills_icon_" + skills[i] + ".png' alt='" + skills[i] + "'></a></div>";
  }
}
window.onload = loadSkills;


// Nav Scroll to Subsections
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