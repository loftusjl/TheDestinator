// Dropdown Points of Interest
$('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });
// start progress bar
function loadingOn() {
    document.getElementById("loading").style.display = "block";
}

function loadingOff() {
    document.getElementById("loading").style.display = "none";
}
// end progress bar

