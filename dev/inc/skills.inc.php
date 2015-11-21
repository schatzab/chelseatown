
<section class="jumbotron">
  <div class="container">
    <header class="page-header">
      <h2>Some skills I'm proud of</h2>      
    </header>
    <div id="skills_loop" onLoad="loadSkills();"></div>
  </div>
</section>

<script>
var skills = ["html5", "css3", "js", "jquery", "git", "bootstrap"]; // ** Add more boxes to the array here
function loadSkills() {
  for (var i = 0; i < skills.length; i++) {
      document.getElementById("skills_loop").innerHTML += "<div class='col-xs-6 col-md-3'><a href='JavaScript:void(0)' class='thumbnail'><img src='images/skills_icon_" + skills[i] + ".png' alt='" + skills[i] + "'></a></div>";
  }
}
window.onload = loadSkills;
</script>