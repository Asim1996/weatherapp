$(function() {

$("#address").focus(function(){
$(".close-btn").addClass("active");
});

$("#address").focusout(function(){
  $(".close-btn").removeClass("active");
});

});





// jQuery('#form-container').on('submit',function(e){
//   e.preventDefault();  
//   var address=$('#address').val();
// var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address='+address+'';

//     $("#formaddress").html("");
//     $("#temp").html("");
//     $("#err").html("");

// $.ajax({
//         type:"GET",
//         url:geocodeUrl
//     }).done(function(data){
//             console.log(data);
//                 if(data.status==='ZERO_RESULTS'){
//                     $('#err').text('Unable to find that address')
//                 }
//              else{
//             var address=data.results[0].formatted_address;
//             var lat=data.results[0].geometry.location.lat;
//             var lng=data.results[0].geometry.location.lng;
//             $('#formaddress').html(address);
            
//              var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location='+lat+","+lng+'';
//              var metaUrl='https://maps.googleapis.com/maps/api/streetview/metadata?size=600x300&location='+lat+","+lng+'&fov=90&heading=235&pitch=10&key=AIzaSyBRfqOSOF5VIbKUA2NrIY0EM5CjHMLFIUo';
             
//             $.ajax({
//                 type:"GET",
//                 url:metaUrl
//             }).done(function(data){
//                 console.log(data);
//                 if(data.status==='ZERO_RESULTS'){
//                     $('body').css('background-color','#232323');
//                 }else{
//                 $('body').append('<img class="bgimg" src="' + streetviewUrl + '">');
//                    }
//             })
            
//              var forecastRequestTimeout = setTimeout(function(){
              
//                 }, 8000);

//             $.ajax({
//                 type: "get",
//                 url: "https://api.darksky.net/forecast/6b62075a7ba9b8d3dc274c35d1bd832c/"+lat+","+lng+'',
//                 dataType: "jsonp"
//              }).done(function (data) {
//                     console.log('Temperature:',data.currently.temperature);
//                     var temp=Math.round((data.currently.temperature-32)/1.8);
//                     $('#temp').html('Temperature:'+temp+'&deg;C '+data.currently.summary+'<br><br>'+'Summary:'+data.hourly.summary);
//                 clearTimeout(forecastRequestTimeout);
//                 }).catch((e)=>{
//          console.log(e);
//         })            
//  }
// })
// })







