function loadData() {
var address=$('#address').val();
var geocodeUrl='https://maps.googleapis.com/maps/api/geocode/json?address='+address+'';
 $.ajax({
        type:"GET",
        url:geocodeUrl,
    }).done(function(data){
            console.log(data);
             

             	if(data.status==='ZERO_RESULTS'){
					$('body').append('<div class="result"><h3>'+'Unable to find that address'+'</h3></div>')
				}
             else{
            var address=data.results[0].formatted_address;
            // $('#formaddress').html(address)
            $('body').append('<div class="result"><h3>'+address+'</h3></div>')
            var lat=data.results[0].geometry.location.lat;
            var lng=data.results[0].geometry.location.lng;

                var forecastRequestTimeout = setTimeout(function(){
                $('body').append('<div class="result"><h3>'+"failed to get dark forecast resources"+'</h3></div>')
                
                }, 8000);
            $.ajax({
                type: "get",
                url: "https://api.darksky.net/forecast/6b62075a7ba9b8d3dc274c35d1bd832c/"+lat+","+lng+'',
                dataType: "jsonp",
             }).done(function (data) {
                    console.log('Temperature:',data.currently.temperature);
                    var temp=Math.round((data.currently.temperature-32)/1.8);
                    $('.result').append('<div class="result"><h3>'+temp+'&deg;C '+data.currently.summary+'<br><br>'+data.hourly.summary+'</h3></div>');
                    // $('.result').append('<div class="result"><h3>'+data.hourly.summary+'</h3></div>')
                clearTimeout(forecastRequestTimeout);
                })
          }   
            
            
        }).catch((e)=>{
        	console.log(e);
        })
    


return false;
}
 $('#form-container').submit(loadData);







