<!DOCTYPE html>
<html lang="en" ng-app>
<head>
<meta charset="UTF-8">
<meta name="description" content="about ct" />
<meta name="viewport" content="width=device-width, initial-scale=1"><!-- media queries -->
<link rel="shortcut icon" href="/images/favicon.ico">
<title>Chelsea Town</title>
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
	
<!-- header -->
<?php include("inc/header.inc.php"); ?>


<!-- <div id="searchcontrol">Loading</div> -->


<!-- work -->	
<?php include("inc/work.inc.php"); ?>	
<!-- Skills -->		
<?php include("inc/skills.inc.php"); ?>	
<!-- ref -->		
<?php include("inc/ref.inc.php"); ?>	
<!-- About -->		
<?php include("inc/about.inc.php"); ?>	
<!-- footer -->		
<?php include("inc/footer.inc.php"); ?>

<!--js-->
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script src="js/returntotop.js" type="text/javascript"></script>
<script src="js/navscroll.js" type="text/javascript"></script>
<script src="js/showjob.js" type="text/javascript"></script>
<script src="js/showskills.js" type="text/javascript"></script>
<!--endjs-->

<link href='https://fonts.googleapis.com/css?family=Cinzel:700' rel='stylesheet' type='text/css'> <!-- up arrow -->
<link href='https://fonts.googleapis.com/css?family=Leckerli+One' rel='stylesheet' type='text/css'> <!-- quote -->

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-67778220-1', 'auto');
  ga('send', 'pageview');

</script>