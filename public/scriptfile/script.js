$(function() {

$("#address").focus(function(){
$(".close-btn").addClass("active");
});

$("#address").focusout(function(){
  $(".close-btn").removeClass("active");
});
});









