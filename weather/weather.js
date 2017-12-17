const request=require('request');
const config=require('../config.js');
var API=config.DarkskyApiKEY;
var getWeather=(lat,lng,callback)=>{
request({
	url:`https://api.darksky.net/forecast/${API}/${lat},${lng}`,
	json:true
},(error,response,body)=>{
	if(!error && response.statusCode===200){
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature:body.currently.apparentTemperature,
			WeatherSummary:body.currently.summary
		});	
	}else{
		callback('Unable to fetch weather');
		}
	});	
};
module.exports.getWeather=getWeather;
