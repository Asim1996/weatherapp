$(function() {
$("#address").focus(function(){
$(".close-btn").addClass("active");
});
$("#address").focusout(function(){
  $(".close-btn").removeClass("active");
});
});
function showLoader() {
  var overlay = document.getElementById("overlay");
  var mainContent = document.getElementById("mainContent");
  overlay.style.display = 'block';
  mainContent.style.display = 'none';
  setTimeout( function(){
    overlay.style.display = 'none';
    mainContent.style.display = 'block';
  }, 15000);
}

var overlay = document.getElementById("overlay");
var mainContent = document.getElementById("mainContent");
mainContent.style.display = 'none';
window.addEventListener('load', function(){
  overlay.style.display = 'none';
  mainContent.style.display = 'block';
  
})









