const express = require('express')   //naming variables basically
const app = express()  
const port = 3000 

var AllRestaurants = [

{
	"name": "Juan's Flying Burrito",
	"hunger": 6,
	"price": 1,
	"alcohol": true,
	"carryout": true,
	"fancy": 1,
	"ID": 1,
},

{
	"name": "Turkey and the Wolf",
	"hunger": 5,
	"price": 2,
	"alcohol": true,
	"carryout": true,
	"fancy": 2,
	"ID": 2,
},

{
	"name": "Kin",
	"hunger": 4,
	"price": 3,
	"alcohol": false,
	"carryout": false,
	"fancy": 3,
	"ID": 3,
},

{
	"name": "Shaya",
	"hunger": 3,
	"price": 4,
	"alcohol": true,
	"carryout": true,
	"fancy": 4,
	"ID": 4,
},

{
	"name": "Lilette",
	"hunger": 2,
	"price": 5,
	"alcohol": true,
	"carryout": false,
	"fancy": 5,
	"ID": 5,
},

{
	"name": "August",
	"hunger": 1,
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

var userData = {
	fancy: 6,
	hunger: 1,
	price: 6,
	alcohol: true,
	carryout: true,
}

app.post ('/get-userData', function(request, response) {

	response.send(userData);

	console.log(request.body);
}


	)







