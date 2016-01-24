// Show Skills
var skills1 = ["JavaScript", "HTML5", "CSS", "PHP", "Ruby on Rails", "UI / UX", "jQuery", "Adobe Photoshop", "Adobe Illustrator", "Responsive Design", "Windows, MacOS, Mobile", "API", "Remote Work"]; 
var skills2 = ["Sass", "MySQL", "AngularJS", "Bootstrap", "Adobe InDesign", "Wireframes", "Software Testing", "Start-up Experience", "WordPress", "Hardware", "ReactJS", "Sublime Text",  "GitHub"]; 

// Skils Function
function loadSkills() {
  for (var i = 0; i < skills1.length; i++) {
      document.getElementById("skills_loop").innerHTML += "<div class='skills_hi_lite'>" + skills1[i] + "<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>";
  }
  for (var x = 0; x < skills1.length; x++) {
      document.getElementById("skills_loop2").innerHTML += "<div class='skills_hi_lite'>" + skills2[x] + "<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>";
  }

}
window.onload = loadSkills;