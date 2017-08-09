//requiring the models
var db = require("../models");

//routes
//=========================================
module.exports = function(app){

	//GET Route to display all user items
app.get("/api/assets", function(req, res){
		db.Asset.findAll({}).then(function(assets){
			res.json(assets);
		});
	});
	//POST route for adding new item
	app.post("/api/assets", function(req,res){
		db.Asset.create({

			itemName: req.body.itemName,
			category: req.body.category,
			make: req.body.make,
			model: req.body.model,
			serial_num: req.body.serial_num,
			bought: req.body.bought,
			price: req.body.price,
			info: req.body.info,
			inherit: req.body.inherit,
			image: req.body.image

		}).then(function(assets){
			
			res.json(assets);
		});
	});
	
	//route to UPDATE asset
	app.put("/api/assets", function(req,res){
		db.Asset.update(
		{
			itemName: req.body.itemName,
			category: req.body.category,
			make: req.body.category,
			model: req.body.model,
			serial_num: req.body.serial_num,
			bought: req.body.bought,
			price: req.body.price,
			info: req.body.info,
			inherit: req.body.inherit,
			image: req.body.image
		},
		{
			where: {id: req.body.id}
		}).then(function(assets){
			res.json(assets);
		});
	});

	//route to DELETE asset
	app.delete("/api/assets/:id", function(req, res){
		db.Asset.destroy({
			where: {id: req.params.id}
		}).then(function(assets){
			res.json(assets);
		});
	});
}