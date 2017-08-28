// Show Skills
var skills1 = ["CSS", "HTML", "JavaScript", "PHP", "Ruby on Rails", "Ghost Inspector", "UI / UX", "Bootstrap", "Adobe Photoshop", "Adobe Illustrator", "VCarve Pro", "Responsive Design", "Windows, MacOS, Mobile", "API"]; 
var skills2 = ["Sass", "MySQL", "Rhinoceros", "QA", "Adobe InDesign", "Software Testing", "npm", "Fusion360", "Start-up Experience", "WordPress", "Hardware", "ReactJS", "Sublime Text",  "GitHub"]; 

// Skills Function
function loadSkills() {
  for (var i = 0; i < skills1.length; i++) {
      document.getElementById("skills_loop").innerHTML += "<div class='skills_hi_lite'>" + skills1[i] + "<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>";
  }
  for (var x = 0; x < skills1.length; x++) {
      document.getElementById("skills_loop2").innerHTML += "<div class='skills_hi_lite'>" + skills2[x] + "<span>&#9733;&#9733;&#9733;&#9733;&#9733;</span></div>";
  }

}
window.onload = loadSkills;