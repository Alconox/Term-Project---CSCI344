(function () {
	"use strict";
	
	var express = require('express'),
			bodyParser = require('body-parser'),
			mongoose = require('mongoose'),
			app = express();
	mongoose.Promise = global.Promise;

	app.use(express.static(__dirname));
	app.use(bodyParser.urlencoded({ extended: true }));
	
	//mongoose.connect('mongodb://localhost/');
	
	var PieceSchema = mongoose.Schema({
		"name": String,
		"category": String,
		"yarn weight": String
	});
	var Designer = mongoose.model('Designer', PieceSchema;
	
	app.use(function(req, res, next) {
  	console.log('%s %s', req.method, req.url);
		next();
	});
	
	app.get("/getDesigner", function(req, res) {
		
		Designer.find(req.query, function(err, Designer) {
			if (err) {
				console.log(err);
			} else {
				console.log(musician);
				res.json(musician);
			}		
		});

	});
	
	app.post("/putDesigner", function(req, res) {
		var newDesigner = new Designer(req.body);
		newDesigner.save(function(error, data) {
			if (error) console.log(error); 
		});
	});
	
	app.post("/updateDesigner", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"category" : req.body.category}};
		Designer.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
	
	app.post("/removeDesigner", function(req, res) {
		var oldDesigner = new Designer(req.body);
		oldDesigner.remove(function(error, data) {
			if (error) console.log(error);
		});
	});

	app.listen(3000);
	console.log("Server listening on port 3000."); 

}());