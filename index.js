(function () {
	"use strict";
	
	var express = require('express'),
			bodyParser = require('body-parser'),
			mongoose = require('mongoose'),
			app = express();
	mongoose.Promise = global.Promise;

	app.use(express.static(__dirname));
	app.use(bodyParser.urlencoded({ extended: true }));
	
	mongoose.connect('mongodb://localhost/Patterns');
	
	var DesignSchema = mongoose.Schema ({"id" : Number,
                      "name" : String,
				      "designer" : String,
				      "publication" : String,
				      "category" : String,
				      "yarn-weight" : String,
				      "needle-size-us" : String,
				      "needle-size-mm" : String,
				      "yardage" : String,
				      "image1" : String,
				      "image2" : String
				     });
	var Design = mongoose.model('Design', DesignSchema);
	
	app.use(function(req, res, next) {
  	console.log('%s %s', req.method, req.url);
		next();
	});
	
	app.get("/getDesign", function(req, res) {
		
		Musician.find(req.query, function(err, Design) {
			if (err) {
				console.log(err);
			} else {
				console.log(Design);
				res.json(Design);
			}		
		});

	});
	
	app.post("/putDesign", function(req, res) {
		var newDesign = new Design(req.body);
		newDesign.save(function(error, data) {
			if (error) console.log(error); 
		});
	});
	
	app.post("/updateMusician", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"instrument" : req.body.instrument}};
		Musician.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
	
	app.post("/removeDesign", function(req, res) {
		var oldDesign = new Design(req.body);
		oldDesign.remove(function(error, data) {
			if (error) console.log(error);
		});
	});

	app.listen(3000);
	console.log("Server listening on port 3000."); 

}());