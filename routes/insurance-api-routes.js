var db = require("../models");

//routes
//==================================

module.exports = function(app){
	//GET Route to display all user insurance
	app.get("/api/insurance", function(req, res){
		db.Insurance.findAll({}).then(function(insurance){
			res.json(dbInsurance);
		});
	});

	//POST route for adding new insurance
	app.post("/api/insurance", function(req,res){
		db.Insurance.create({

			insur_type: req.body.insure_type,
			company: req.body.company,
			phone_num: req.body.phone_num,
			agent: req.body.agent,
			policy_num: req.body.policy_num,
			start_date: req.body.start_date,
			info: req.body.info,
			image: req.body.image

		}).then(function(insurance){
			
			res.json(dbInsurance);
		});
	});
	
	//route to UPDATE insurance
	app.put("/api/insurance", function(req,res){
		db.Insurance.update(
		{
			insur_type: req.body.insure_type,
			company: req.body.company,
			phone_num: req.body.phone_num,
			agent: req.body.agent,
			policy_num: req.body.policy_num,
			start_date: req.body.start_date,
			info: req.body.info,
			image: req.body.image
		},
		{
			where: {id: req.body.id}
		}).then(function(insurance){
			res.json(dbInsurance);
		});
	});

	//route to DELETE insurance
	app.delete("/api/insurance/:id", function(req, res){
		db.Insurance.destroy({
			where: {id: req.params.id}
		}).then(function(insurance){
			res.json(dbInsurance);
		});
	});
}