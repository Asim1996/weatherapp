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
function correctBKG(icon,bkg,day) {
  bkg.src = `../img/` + `${icon}` + '.jpg';
 }