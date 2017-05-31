<!DOCTYPE html>
<html lang="en" ng-app>
<head>
<meta charset="UTF-8">
<meta name="description" content="about ct" />
<meta name="viewport" content="width=device-width, initial-scale=1"><!-- media queries -->
<link rel="shortcut icon" href="/images/favicon.ico">
<title>Chelsea Town - Portfolio</title>
</head>
 <!--css-->
<link rel="stylesheet" type="text/css" href="css/chelseatown.css">
<link href='https://fonts.googleapis.com/css?family=Arimo:400,700' rel='stylesheet' type='text/css'> <!-- body -->
<link href='https://fonts.googleapis.com/css?family=Kreon:700' rel='stylesheet' type='text/css'>
<!-- header -->
<link rel="stylesheet" type="text/css" href="css/normalize.css">
<!--endcss-->

<script type="text/javascript" src="https://www.google.com/jsapi"></script>
<script src="https://www.google.com/jsapi" type="text/javascript"></script>
<script language="Javascript" type="text/javascript">
   //<!
    google.load('search', '1'); /* Loads the Google Search API*/
  	google.load("jquery", "1.4.2");
  	google.load("jqueryui", "1.7.2");

    function OnLoad() {
      // Create a search control
      var searchControl = new google.search.SearchControl();

      // Add in a full set of searchers
      var localSearch = new google.search.LocalSearch();
      searchControl.addSearcher(localSearch);
/*      searchControl.addSearcher(new google.search.WebSearch());*/

      // Set the Local Search center point
      localSearch.setCenterPoint("Bend, OR");

      // tell the searcher to draw itself and tell it where to attach
      searchControl.draw(document.getElementById("searchcontrol"));

      // execute an inital search
      searchControl.execute("Remote Locations");
    }
    google.setOnLoadCallback(OnLoad);

    //]]>
    </script>

<body>
<center>

<header>
<!-- nav -->
<nav class="top_bar">
  <div style="float: left;">
    <div class="head_text_sp"><a href="/" style="color: #93c2d3;">Chelsea Town</a></div>
  </div>

  <div class="top_bar_inner">
    <a href="/#work" class="nav_jump">Work</a>
    <a href="/portfolio.php" class="nav_jump">Portfolio</a>
    <a href="/#skills" class="nav_jump">Skills</a>
    <a href="/#ref" class="nav_jump">Reference</a>
    <a href="/#about" class="nav_jump">About</a>
    <a href="/#contact" class="nav_jump">Contact</a>
  </div>
</nav>
</header>

<!-- Main Content -->
<div class="container_outer_sp">
  <div class="container_inner">
    <div class="port_box">
      <h1><a href="http://remoteloc.com/" target="_blank">RemoteLoc</a></h1>
      A way for workers to find well-suited locations in their city to work remotely<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img3.php"><img src="images/port_remoteloc_1_sm.png" alt="Remote Loc" class="port_box_img_container_each"></a>
        <a href="/lg/img1.php"><img src="images/port_remoteloc_2_sm.png" alt="Remote Loc" class="port_box_img_container_each"></a>
        <a href="/lg/img2.php"><img src="images/port_remoteloc_3_sm.png" alt="Remote Loc" class="port_box_img_container_each"></a>
      </div>


    <div class="port_box">
      <h1><a href="https://www.smartwaiver.com/" target="_blank">Basecamp</a></h1>
      Design compositions created as a mockup for the Basecamp interface<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img4.php"><img src="images/port_basecamp_1_sm.png" alt="Basecamp" class="port_box_img_container_each"></a>
        <a href="/lg/img5.php"><img src="images/port_basecamp_2_sm.png" alt="Basecamp" class="port_box_img_container_each"></a>
      </div>
    </div>



    <div class="port_box">
      <h1><a href="https://www.smartwaiver.com/" target="_blank">Smartwaiver</a></h1>
      A compilation of UI/UX, code development and design work for Smartwaiver.com<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img6.php"><img src="images/port_smartwaiver_1_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img7.php"><img src="images/port_smartwaiver_2_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img8.php"><img src="images/port_smartwaiver_3_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img9.php"><img src="images/port_smartwaiver_4_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img10.php"><img src="images/port_smartwaiver_5_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img11.php"><img src="images/port_smartwaiver_6_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img12.php"><img src="images/port_smartwaiver_7_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img13.php"> <img src="images/port_smartwaiver_8_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img14.php"><img src="images/port_smartwaiver_9_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img15.php"><img src="images/port_smartwaiver_10_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img16.php"><img src="images/port_smartwaiver_11_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img17.php"><img src="images/port_smartwaiver_12_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img18.php"><img src="images/port_smartwaiver_13_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img19.php"><img src="images/port_smartwaiver_14_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
        <a href="/lg/img20.php"> <img src="images/port_smartwaiver_15_sm.png" alt="Smartwaiver" class="port_box_img_container_each"></a>
      </div>
    </div>

    <div class="port_box">
      <h1><a href="http://www.drivefoil.com/" target="_blank">Drive Foil</a></h1>
      A logo creation for the carbon fiber website Drive Foil<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img21.php"><img src="images/port_drivefoil_1_sm.png" alt="Drive Foil" class="port_box_img_container_each"></a>
      </div>
    </div>

    <div class="port_box">
      <h1>Paper Dolls</h1>
      A logo creation for the bookclub, Paper Dolls, located in Bend, Oregon<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img22.php"><img src="images/port_paperdolls_1_sm.png" alt="Paper Dolls" class="port_box_img_container_each"></a>
      </div>
    </div>

    <div class="port_box">
      <h1><a href="http://www.warriorwoodfins.com/" target="_blank">Warrior Wood Fins</a></h1>
      A website created and designed to sell handmade wooden surfboard fins<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img23.php"><img src="images/port_warriorwoodfins_1_sm.png" alt="Warrior Wood Fins" class="port_box_img_container_each"></a>
        <a href="/lg/img24.php"><img src="images/port_warriorwoodfins_2_sm.png" alt="Warrior Wood Fins" class="port_box_img_container_each"></a>
      </div>
    </div>

    <div class="port_box">
      <h1>Dave Town Fins</h1>
      A website created for fiberglass surfboard fins<br>
      <!-- Images -->
      <div class="port_box_img_container">
        <a href="/lg/img25.php"><img src="images/port_davetownfins_1_sm.png" alt="Dave Town Fins" class="port_box_img_container_each"></a>
      </div>
    </div>
  </div>
</div>

<!-- footer -->		
<?php include("inc/footer.inc.php"); ?>

<!--js-->
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/returntotop.js" type="text/javascript"></script>
<script src="js/navscroll.js" type="text/javascript"></script>
<script src="js/overlay.js" type="text/javascript"></script>
<script src="js/showskills.js" type="text/javascript"></script>

<!-- up arrow -->
<link href='https://fonts.googleapis.com/css?family=Cinzel:700' rel='stylesheet' type='text/css'>
<!-- quote --> 
<link href='https://fonts.googleapis.com/css?family=Leckerli+One' rel='stylesheet' type='text/css'>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67778220-1', 'auto');
  ga('send', 'pageview');
</script>