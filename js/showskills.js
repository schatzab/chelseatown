// Show Skills
var skills1 = ["CSS", "HTML", "PHP", "Ruby on Rails", "Ghost Inspector", "UI / UX", "Responsive Design", "Adobe InDesign", "VCarve Pro", "Sublime Text", "CNC Machining"]; 
var skills2 = ["JavaScript", "Sass", "MySQL", "Rhinoceros", "QA", "Adobe Illustrator", "Adobe Photoshop", "Fusion360", "Start-up Experience", "WordPress", "System Building", "ReactJS", "GitHub"]; 

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