// Show Skills
var skills1 = ["CSS3", "HTML5", "JavaScript", "ReactJS", "UI / UX", "jQuery", "Adobe Photoshop", "Adobe Illustrator", "Responsive Design", "Bootstrap", "Windows, MacOS, Mobile", "API", "Remote Work"]; 
var skills2 = ["Software Testing", "Technical Support", "AngularJS", "Adobe InDesign", "Wireframes", "MySQL", "Start-up Experience", "WordPress", "Hardware", "PHP", "Sublime Text",  "GitHub", "npm"]; 

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