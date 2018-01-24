const express=require('express');
const axios=require('axios');


var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");
app.use(express.static('public'))
const port=process.env.PORT||3000;
app.get('/',(req,res)=>{
	res.render('index.ejs');
})
app.post('/result',async(req,res)=>{
	var address=req.body.location;
	try{
	var encodedAddress=encodeURIComponent(address);
	var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyAoPo7AVWoeYECEWDsGCI1KHwP5qk5d7a8`;
	console.log(geocodeUrl);
	
		var response=await axios.get(geocodeUrl);
	if(response.data.status==='ZERO_RESULTS'){
			throw new Error('Unable to find that address')
	}else{
	var lat=response.data.results[0].geometry.location.lat;
	var lng=response.data.results[0].geometry.location.lng;
	var formattedaddress=response.data.results[0].formatted_address;
	var weatherUrl=`https://api.darksky.net/forecast/6b62075a7ba9b8d3dc274c35d1bd832c/${lat},${lng}`;
	console.log(weatherUrl);
	var weatherResponse=await axios.get(weatherUrl);
	var temperature=weatherResponse.data.currently.temperature;
	var	apparentTemperature=weatherResponse.data.currently.apparentTemperature;
	var weatherSummary=weatherResponse.data.currently.summary;
	var humidity=(weatherResponse.data.currently.humidity);
	var visibility=weatherResponse.data.currently.visibility;
	console.log(temperature,apparentTemperature,weatherSummary);
	console.log(lat,lng,formattedaddress);	
	
	res.render('result.ejs',{
		formattedaddress:formattedaddress,
		lat:lat,
		lng:lng,
		temperature:temperature,
		apparentTemperature:apparentTemperature,
		weatherSummary:weatherSummary,
		humidity:humidity,
		visibility:visibility

		});
	}	
	}catch(e){
		alert('Unable to get that address')
		res.redirect('/');
	}
	
})

app.listen(port,()=>{
	console.log(`Server is up on port ${port}`);
});