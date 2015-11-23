// scroll shows top-sticky nav
function pageScroll() {
	if (document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
		var topNav = document.getElementById("navShow");
		topNav.style.visibility = "visible";
    	document.getElementsByTagName("body")[0].style.paddingTop = "50px";  // adjusts for nav bar height
	}
}

// Skills
var skills = ["html5", "css3", "js", "jquery", "git", "bootstrap"]; // ** Add more boxes to the array here
function loadSkills() {
  for (var i = 0; i < skills.length; i++) {
      document.getElementById("skills_loop").innerHTML += "<div class='col-xs-6 col-md-3'><a href='JavaScript:void(0)' class='thumbnail'><img src='images/skills_icon_" + skills[i] + ".png' alt='" + skills[i] + "'></a></div>";
  }
}
window.onload = loadSkills;