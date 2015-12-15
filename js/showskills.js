// Show Skills
var skills1 = ["Fontend Coding", "CSS3", "HTML5", "JavaScript", "UI / UX", "Developer Tools", "jQuery", "Adobe Photoshop", "Adobe Illustrator", "Responsive Web Design", "Bootstrap", "Windows, MacOS, Android", "API"]; 
var skills2 = ["Software Testing", "Technical Support", "AngularJS", "Adobe InDesign", "Wireframes", "MySQL", "Copy Editing", "WordPress", "Hardware", "PHP", "SEO", "Video Editing", "Voice Overs"]; 

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