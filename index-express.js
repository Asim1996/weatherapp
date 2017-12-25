const express=require('express');
var bodyParser=require('body-parser');
const request=require('request');

const axios=require('axios');
const config=require('./config.js');
const hbs=require('hbs');
var app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','hbs');

app.get('/',(req,res)=>{
	res.render('home.hbs');
})
app.get("/result",function(req,res){
    var address=req.query.address;
    var lat,lng;
    console.log(address);
	var encodedAddress=encodeURIComponent(address);
var geocodeUrl=`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;
axios.get(geocodeUrl).then((response)=>{
	if(response.data.status==='ZERO_RESULTS'){
		throw new Error('Unable to find that address')
	}
	var lat=response.data.results[0].geometry.location.lat;
	var lng=response.data.results[0].geometry.location.lng;
	
	var weatherUrl=`https://api.darksky.net/forecast/6b62075a7ba9b8d3dc274c35d1bd832c/${lat},${lng}`;
	// res.render("result",{
	// 	address:response.data.results[0].formatted_address,
	// 	lat:response.data.results[0].geometry.location.lat,
	// 	lng:response.data.results[0].geometry.location.lng})
	return axios.get(weatherUrl);
}).then((response)=>{
	var temperature=response.data.currently.temperature;
	var apparentTemperature=response.data.currently.apparentTemperature;
	res.render("result",{
		temperature:temperature,
		apparentTemperature:apparentTemperature
		});
}).catch((e)=>{
	if(e.code==='ENOTFOUND'){
		console.log('Unable to connect to API servers');
	}else{
		console.log(e.message);
	}
});
 }
 ) 

app.listen(3000,()=>{
	console.log('Server is up on port 3000');
});