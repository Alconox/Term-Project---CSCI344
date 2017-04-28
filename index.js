(function () {
	"use strict";
	
	var express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        app = express(),
        patterns = mongoose.connection.db.collection('Patterns');
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
	
	app.post("/updateDesign", function(req, res) {
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
    
   patterns.remove();
      console.log("Everything Dropped");
    
    patterns.insertOne({"id" : 000,
                      "name" : 'Cladonia',
				      "designer" : 'Kirsten Kapur',
				      "publication" : 'Through The Loops',
				      "category" : 'Shawls',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '520-550',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/throughtheloops/296361404/1294_galezucker0314_TTL_medium2.jpg',
				      "image2" : 'http://farm6.static.flickr.com/5148/5658365207_e59e6fec2b_z.jpg'});
    
    patterns.insertOne({"id" : 001,
                      "name" : 'Waiting For Rain',
				      "designer" : 'Sylvia McFadden',
				      "publication" : 'Softsweater KNits',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '760-800',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/softsweater/355112954/image.jpeg',
				      "image2" : 'http://farm2.static.flickr.com/1627/24600325983_fb5eeca8e6_b.jpg'});
        
    patterns.insertOne({"id" : 002,
                      "name" : 'Nurmilintu',
				      "designer" : 'Heidi Alander',
				      "publication" : 'Sadelma Knits',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '4,6',
				      "needle-size-mm" : '3.5,6',
				      "yardage" : '416-427',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/Sadelma/243512405/IMG_6123.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/Sadelma/243512406/IMG_6090_medium2.JPG'});
        
    patterns.insertOne({"id" : 003,
                      "name" : 'Echo Flower Shawl',
				      "designer" : 'Jenny Johnson Johnen',
				      "publication" : 'Nyansera',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Lace',
				      "needle-size-us" : '5',
				      "needle-size-mm" : '3.75',
				      "yardage" : '440-880',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/mintyfresh/48899284/IMG_9496.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/enugu/28475870/DSC_0370_medium2.jpg'});
        
    patterns.insertOne({"id" : 004,
                      "name" : 'Find Your Fade',
				      "designer" : 'Andrea Mowry',
				      "publication" : 'Drea Renee Knits',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '4',
				      "needle-size-mm" : '3.5',
				      "yardage" : '1500-1600',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/dreareneeknits/413536689/17.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/dreareneeknits/413535621/5_medium2.jpg'});
        
    patterns.insertOne({"id" : 005,
                      "name" : 'Nuvem',
				      "designer" : 'Martina Behm',
				      "publication" : 'Strickmich!',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Lace',
				      "needle-size-us" : '4',
				      "needle-size-mm" : '3.5',
				      "yardage" : '1728-1739',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/Maltina/73919781/IMG_5602_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/Maltina/73919636/IMG_5584_medium.jpg'});
        
    patterns.insertOne({"id" : 006,
                      "name" : 'Nymphalidea Haruni',
				      "designer" : 'Melinda VerMeer',
				      "publication" : 'Knitty, Deep Fall 2013',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Light Fingering',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '450-500',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/gldelx/182730270/Nymphalidea9_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/gldelx/182728945/Nymphalidea3_medium2.jpg'});
        
    patterns.insertOne({"id" : 007,
                      "name" : 'Haruni',
				      "designer" : 'Emily Ross',
				      "publication" : 'Knitterain',
				      "category" : 'Shawl',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '4',
				      "needle-size-mm" : '3.5',
				      "yardage" : '500',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/knitterain/419099975/Haruni-171-web-2048_medium2.jpg',
				      "image2" : 'ttps://images4-e.ravelrycache.com/uploads/knitterain/419099971/Haruni-144-web-2048_medium2.jpg'});
            
    patterns.insertOne({"id" : 000,
                      "name" : 'String',
				      "designer" : 'String',
				      "publication" : 'String',
				      "category" : 'Shawl',
				      "yarn-weight" : 'String',
				      "needle-size-us" : 'String',
				      "needle-size-mm" : 'String',
				      "yardage" : 'String',
				      "image1" : 'String',
				      "image2" : 'String'});

    console.log("Data Loaded");
    
	app.listen(3000);
	console.log("Server listening on port 3000."); 

}());