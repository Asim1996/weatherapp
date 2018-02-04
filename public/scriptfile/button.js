$(function() {
$("#address").focus(function(){
$(".close-btn").addClass("active");
});
$("#address").focusout(function(){
$(".close-btn").removeClass("active");
});
});
$("#myCarousel").on("slide.bs.carousel", function(e) {
  var $e = $(e.relatedTarget);
  var idx = $e.index();
  var itemsPerSlide = 3;
  var totalItems = $(".carousel-item").length;

  if (idx >= totalItems - (itemsPerSlide - 1)) {
    var it = itemsPerSlide - (totalItems - idx);
    for (var i = 0; i < it; i++) {
      // append slides to end
      if (e.direction == "left") {
        $(".carousel-item")
          .eq(i)
          .appendTo(".carousel-inner");
      } else {
        $(".carousel-item")
          .eq(0)
          .appendTo(".carousel-inner");
      }
    }
  }
});
function showMap(){

  var map = document.getElementById('map');
  var beforMap = document.getElementById('beforeMap');
  var mapTrigger = document.getElementById('mapTrigger');
  map.style.display = 'flex';
  beforeMap.style.display = 'none';
  initMap();
  mapTrigger.style.display = 'none';
}
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



