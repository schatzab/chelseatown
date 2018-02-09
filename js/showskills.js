// Show Skills
var skills1 = ["Account Management", "Document Writing",  "Technical Writing", "HTML", "CSS / Sass", "JavaScript", "SEO", "Google Calendars", "Slack", "Ghost Inspector", "Responsive Design", "Startup Exp", "VCarve Pro", "Salesforce", "CNC Machining", "MySQL", "MailChimp", "System Building", "Camtasia"]; 
var skills2 = ["Client Relations", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Data Analysis", "QA", "UI / UX", "Wireframes", "Google Docs", "Google Keep", "Rhinoceros 3D", "WordPress", "Fusion 360", "Ruby on Rails", "PHP", "GitHub", "Sublime Text", "SaaS", "Constant Contact", "Microsoft Office"]; 

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