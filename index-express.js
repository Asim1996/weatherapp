const express=require('express');
const hbs=require('hbs');
const axios=require('axios');
const config=require('./config.js');
var API=config.DarkskyApiKEY;

var bodyParser=require('body-parser');
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','hbs');
app.use(express.static(__dirname + "/public"));
hbs.registerPartials(__dirname+'/views/partials')

const port=process.env.PORT||3000;


app.get('/',(req,res)=>{
	res.render('index.hbs');
})
app.post('/result',async(req,res)=>{
	var address=req.body.location;
	var encodedAddress=encodeURIComponent(address);
	var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
	console.log(geocodeUrl);
	var response=await axios.get(geocodeUrl);
	if(response.data.status==='ZERO_RESULTS'){
		// throw new Error('Unable to find that address')
		var error="Unable to find that address";
	}else{
	var lat=response.data.results[0].geometry.location.lat;
	var lng=response.data.results[0].geometry.location.lng;
	var formattedaddress=response.data.results[0].formatted_address;
	var weatherUrl=`https://api.darksky.net/forecast/${API}/${lat},${lng}`;
	console.log(weatherUrl);
	var weatherResponse=await axios.get(weatherUrl);
	var temperature=weatherResponse.data.currently.temperature;
	var	apparentTemperature=weatherResponse.data.currently.apparentTemperature;
	var weatherSummary=weatherResponse.data.currently.summary;
	console.log(temperature,apparentTemperature,weatherSummary);
	console.log(lat,lng,formattedaddress);	
	
	res.render('result.hbs',{
		formattedaddress:formattedaddress,
		temperature:temperature,
		apparentTemperature:apparentTemperature,
		weatherSummary:weatherSummary,
		
		});
	}
})

app.listen(port,()=>{
	console.log(`Server is up on port ${port}`);
});