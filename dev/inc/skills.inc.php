
<section class="jumbotron">
  <div class="container">
    <header class="page-header">
      <h3>Some skills I'm proud of</h3>      
    </header>
    <div id="skills_loop"></div>
  </div>
</section>

<script>
document.getElementById("skills_loop").addEventListener("load", loadSkills);  // load function
var skills = ["html5", "css3", "js", "bootstrap"]; // skills array

function loadSkills() {
  for (var i = 0; i < skills.length; i++) {
      document.getElementById("skills_loop").innerHTML = "<div class='col-xs-6 col-md-3'><a href='#' class='thumbnail'><img src='images/skills_icon_" + skills[i] + ".png' alt='" + skills[i] + "'></a></div>";
      console.log(skills[i]);
  }
}
</script>