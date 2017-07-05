const express = require('express')   //naming variables basically
const app = express()  
const port = 3000 
var bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

var AllRestaurants = [

{
	"name": "Juan's Flying Burrito",
	"hunger": 1,
	"price": 1,
	"alcohol": true,
	"carryout": true,
	"fancy": 1,
	"ID": 1,
},

{
	"name": "Turkey and the Wolf",
	"hunger": 2,
	"price": 2,
	"alcohol": true,
	"carryout": true,
	"fancy": 2,
	"ID": 2,
},

{
	"name": "Kin",
	"hunger": 3,
	"price": 3,
	"alcohol": false,
	"carryout": false,
	"fancy": 3,
	"ID": 3,
},

{
	"name": "Shaya",
	"hunger": 4,
	"price": 4,
	"alcohol": true,
	"carryout": true,
	"fancy": 4,
	"ID": 4,
},

{
	"name": "Lilette",
	"hunger": 5,
	"price": 5,
	"alcohol": true,
	"carryout": false,
	"fancy": 5,
	"ID": 5,
},

{
	"name": "August",
	"hunger": 6,
	"price": 6,
	"alcohol": true,
	"carryout": false,
	"fancy": 6,
	"ID": 6,
}
];

app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});

app.get('/get-AllRestaurants', function(request, response) {  
  response.send(AllRestaurants);
});

// var userData = {

// 	alcohol: true,
	
// }

app.post ('/get-userData', function(request, response) {
	console.log("route getting hit");
	console.log(request.body);
	console.log(AllRestaurants.name);
	response.send("Yay");


});










