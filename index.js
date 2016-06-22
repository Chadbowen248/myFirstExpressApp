var express = require("express");
var app = express();

var animals = {
	pig: "Oink",
	cow: "Moo",
	dog: "Woof Woof!"
};


app.get("/", function(req, res) {
	res.send("welcome to the homepage");
})

app.get("/speak/:animal", function(req, res) {
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof Woof!"
	};
	

	var animal = req.params.animal;
	var sound = sounds[animal];

	res.send("The " + animal + " says " +sound);
})



























app.listen(3000, function(){
	console.log("server is listening on port 3000");
})
