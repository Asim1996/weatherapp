const express=require('express');
var bodyParser=require('body-parser');
var app=express();
app.use(express.static(__dirname + "/public"));
const port=process.env.PORT||3000;


app.get('/',(req,res)=>{
	res.render('index');
})
app.listen(port,()=>{
	console.log(`Server is up on port ${port}`);
});