// Dropdown Points of Interest
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });

$(function() {
   $(".poiLink").click(function() {
    // get coordinates from map    
    mylat = map.getCenter().lat(); 
    mylng = map.getCenter().lng();
    var poi = $(this).attr('value');
    // console.log(`POI ${poi}`)
    yelpPOI(mylat, mylng, poi);
      // remove classes from all
      $(".poiLink").removeClass("active");
      // add class to the one we clicked
      $(this).addClass("active");

   });
});
// start progress bar
function loadingOn() {
    document.getElementById("loading").style.display = "block";
}

function loadingOff() {
    document.getElementById("loading").style.display = "none";
}
// end progress bar

