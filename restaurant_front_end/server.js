const express = require('express')   //naming variables basically
const app = express()  
const port = 3000 
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

// var Schema = mongoose.Schema;

// var RestaurantSchema = new Schema ({

// 	name: String,
// 	hunger: Number,
// 	price: Number,
// 	alcohol: Boolean,
// 	Carryout: Boolean,
// 	fancy: Number,
// 	ID: Number
// });

// var restaurants = mongoose.model('Restaurants', RestaurantSchema);

mongoose.connect('mongodb://heroku_xqz0gvn1:751m26uu1hjnf4otua908tr8fa@ds153732.mlab.com:53732/heroku_xqz0gvn1', function(error){

if (error) console.error (error);
else console.log ('mongo connected');

});

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.post('mongodb://heroku_xqz0gvn1:751m26uu1hjnf4otua908tr8fa@ds153732.mlab.com:53732/heroku_xqz0gvn1', function (req, res){
	});

// var restaurant = new Restaurant();

// 	restaurant = {
// 	"name": "Juan's Flying Burrito",
// 	"hunger": 1,
// 	"price": 1,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 1,
// 	"ID": 1

// 	};

// restaurant.save(function(err, restaurants){
// 		console.log(restaurant);
// 		if (err)
// 				res.send(err);
// 		else
// 				res.send("Restaurant added!");

// 	

// restaruants.get(function (req, res){


// }

// Todo.find(function (err, todos){

// 	res.json(200, todos);

// });

// app.post('___', function (req, res){

// 	var restaurant = new Restaurant();

// 	restaurant={
// 	"name": "Juan's Flying Burrito",
// 	"hunger": 1,
// 	"price": 1,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 1,
// 	"ID": 1,

// 	};
// 	restaurant.save(function(err){
// 		console.log(restaurant)
// 		if (err)
// 				res.send(err);
// 				res.json(message"Restaurant added!"})

// 	});



// });








// var AllRestaurants = [

// {
// 	"name": "Juan's Flying Burrito",
// 	"hunger": 1,
// 	"price": 1,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 1,
// 	"ID": 1,
// },

// {
// 	"name": "Turkey and the Wolf",
// 	"hunger": 2,
// 	"price": 2,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 2,
// 	"ID": 2,
// },

// {
// 	"name": "Kin",
// 	"hunger": 3,
// 	"price": 3,
// 	"alcohol": false,
// 	"carryout": false,
// 	"fancy": 3,
// 	"ID": 3,
// },

// {
// 	"name": "Shaya",
// 	"hunger": 4,
// 	"price": 4,
// 	"alcohol": true,
// 	"carryout": true,
// 	"fancy": 4,
// 	"ID": 4,
// },

// {
// 	"name": "Lilette",
// 	"hunger": 5,
// 	"price": 5,
// 	"alcohol": true,
// 	"carryout": false,
// 	"fancy": 5,
// 	"ID": 5,
// },

// {
// 	"name": "August",
// 	"hunger": 6,
// 	"price": 6,
// 	"alcohol": true,
// 	"carryout": false,
// 	"fancy": 6,
// 	"ID": 6,
// }
// ];


app.listen(port, function(err) {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`Magic is happening on ${port}`)
});


 





// app.get('/get-all-restaurants', function(request, response){
	
	
// 	console.log(AllRestaurants);
// 	response.send(AllRestaurants);


// 	});


















































// app.get('/get-rest-loops', function(request, response) {


// }



// 	)




// var userData;

// //prints elements from the request object!

// app.post ('/get-userData', function (request, response) {

// 	userData = request.body;

// 	for(i=0; i<AllRestaurants.length; i++){

// 	if(AllRestaurants[i].price == userData.price){
		
// 		response.send(AllRestaurants[i])
// 		console.log(AllRestaurants[i])

// 	}

// }
// }
// );





	// console.log(userData);
	// response.send(userData);


	







	// 

	// 


	// };

	// response.send(AllRestaurants);
// ;
	// AllRestaurants.push(request.body);
	// response.send(AllRestaurants[i].name);



// console.log(AllRestaurants);


// 	var match = AllRestaurants.filter(function(AllRestaurants){
//   return AllRestaurants.hunger == 1;
//   response.send(match);
// });



// app.post ('/get-userData', function(request, response) {
// 	console.log("route getting hit");
// 	console.log(request.body);
	


// });










