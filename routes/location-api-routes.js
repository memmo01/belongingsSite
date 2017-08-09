var db = require("../models");

//routes
//==================================

module.exports = function(app){
    //GET Route to display all user location
    
	app.get("/api/location", function(req, res){
		db.Location.findAll({}).then(function(location){
			res.json(dbLocation);
		});
	});

	//POST route for adding new Location
	app.post("/api/Location", function(req,res){
		db.Location.create({

			locate_name: req.body.locate_name,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip_code: req.body.zip_code,
			phone_num: req.body.phone_num,
			bought: req.body.bought,
			price: req.body.price

		}).then(function(location){
			
			res.json(dbLocation);
		});
	});
	
	//route to UPDATE Location
	app.put("/api/location", function(req,res){
		db.Location.update(
		{
			locate_name: req.body.locate_name,
			street: req.body.street,
			city: req.body.city,
			state: req.body.state,
			zip_code: req.body.zip_code,
			phone_num: req.body.phone_num,
			bought: req.body.bought,
			price: req.body.price
		},
		{
			where: {id: req.body.id}
		}).then(function(location){
			res.json(dbLocation);
		});
	});

	//route to DELETE Location
	app.delete("/api/location/:id", function(req, res){
		db.Location.destroy({
			where: {id: req.params.id}
		}).then(function(location){
			res.json(dbLocation);
		});
	});
}