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









