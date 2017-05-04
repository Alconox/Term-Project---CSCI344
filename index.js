//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

(function () {
	"use strict";
	
	var express = require('express'),
        bodyParser = require('body-parser'),
        mongoose = require('mongoose'),
        app = express(),
        //running = false,
        //urlExists = require('url-exists'),
        patterns = mongoose.connection.collection("patterns");

	mongoose.Promise = global.Promise;

	app.use(express.static(__dirname));
	app.use(bodyParser.urlencoded({ extended: true }));
	
	mongoose.connect('mongodb://localhost/Patterns');
    
	
	var DesignSchema = mongoose.Schema({"id" : Number,
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
	
	app.use(function (req, res, next) {
        console.log('%s %s', req.method, req.url);
		next();
	});
    
    	//--------------CRUD-Definitions-----------//
	
	app.get("/getDesign", function(req, res) {
		console.log(req.query);
		Design.find(req.query, function(err, design) {
			if (err) {
				console.log(err);
			} else {
				console.log(design);
				res.json(design);
			}		
		});

	});

    
	app.post("/putDesign", function(req, res) {
		var newDesign = new Design(req.body);
		newDesign.save(function(error, data) {
			if (error) console.log(error); 
		});
	});
	
	app.post("/updateName", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"name" : req.body.name}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
    	app.post("/updateDesigner", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"designer" : req.body.designer}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
        	app.post("/updatePublication", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"publication" : req.body.publication}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
        	app.post("/updateCategory", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"category" : req.body.category}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
	
            	app.post("/updateYarnWeight", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"yarn-weight" : req.body.yarn-weight}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
            	app.post("/updateNeedleSizeUS", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"needle-size-us" : req.body.needle-size-us}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
	
                	app.post("/updateNeedleSizeMM", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"needle-size-mm" : req.body.needle-size-mm}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
                	app.post("/updateYardage", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"yardage" : req.body.yardage}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
                	app.post("/updateImage1", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"image1" : req.body.image1}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
			if (error) console.log(error);
		});
		res.end();
	});
    
                	app.post("/updateNeedleSizeUS", function(req, res) {
		var conditions = {"name" : req.body.name};
		var update = {$set : {"image2" : req.image2}};
		Design.update(conditions, update, {multi : false}, function(error, result) {
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
    
    //--------------Database-Setup-----------//
    
   patterns.remove();
      console.log("Everything Dropped");
    
    patterns.insertOne({"id" : 0,
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
    
    patterns.insertOne({"id" : 1,
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
        
    patterns.insertOne({"id" : 2,
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
        
    patterns.insertOne({"id" : 3,
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
        
    patterns.insertOne({"id" : 4,
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
        
    patterns.insertOne({"id" : 5,
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
        
    patterns.insertOne({"id" : 6,
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
        
    patterns.insertOne({"id" : 7,
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
            
    patterns.insertOne({"id" : 8,
                      "name" : 'Meris',
				      "designer" : 'Elizabeth Doherty',
				      "publication" : 'Quince & Co.',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '3',
				      "needle-size-mm" : '3.25',
				      "yardage" : 'N/A',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/mehetable/313627245/_quince-co-meris-elizabeth-doherty-knitting-pattern-finch-1_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/bluebeestudio/107642097/DSC_8960_medium2.jpg'});

            
    patterns.insertOne({"id" : 9,
                      "name" : 'Strokkur',
				      "designer" : 'Ysolda Teague',
				      "publication" : 'Ysolda',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '770-1485',
				      "image1" : 'http://farm3.static.flickr.com/2857/9359227424_8dae23ace1_b.jpg',
				      "image2" : 'http://farm8.static.flickr.com/7346/9359228050_4edd2d7992_b.jpg'});

            
    patterns.insertOne({"id" : 10,
                      "name" : 'Bloomsbury',
				      "designer" : 'Svetlana Volkova',
				      "publication" : 'Tweedysheep',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '10,9',
				      "needle-size-mm" : '6,5.5',
				      "yardage" : 'N/A',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/tweedysheep/122138415/bloomsbury_149__683x1024_.jpg',
				      "image2" : 'http://images4-cdn.ravelrycache.com/uploads/tweedysheep/122138447/bloomsbury_156__683x1024_.jpg'});

            
    patterns.insertOne({"id" : 11,
                      "name" : 'Traveller\'s End',
				      "designer" : 'Carol Feller',
				      "publication" : 'Stolen Stitches',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '8',
				      "needle-size-mm" : '5',
				      "yardage" : '1140-1700',
				      "image1" : 'http://farm4.static.flickr.com/3710/10040995994_a760b62c83_z.jpg',
				      "image2" : 'http://farm4.static.flickr.com/3832/10041057876_7e60a1e31e_b.jpg'});

            
    patterns.insertOne({"id" : 12,
                      "name" : 'Aidez',
				      "designer" : 'Cirilia Rose',
				      "publication" : 'Berroco',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Super Bulky',
				      "needle-size-us" : '10.5',
				      "needle-size-mm" : '6.5',
				      "yardage" : '828-1339',
				      "image1" : 'http://farm5.static.flickr.com/4144/5039091347_770004949a_z.jpg',
				      "image2" : 'http://farm5.static.flickr.com/4091/5039425329_fc92b19b9a_z.jpg'});

            
    patterns.insertOne({"id" : 13,
                      "name" : 'Split Ends',
				      "designer" : 'Nataliya Polyakov',
				      "publication" : 'Melody\'s Makings',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '8',
				      "needle-size-mm" : '5',
				      "yardage" : '730-1260',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/melodysmakings/441033542/front_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/melodysmakings/441033682/tie_close_medium2.jpg'});

            
    patterns.insertOne({"id" : 14,
                      "name" : 'Windermere',
				      "designer" : 'Marie Wallin',
				      "publication" : 'Lakeland: Collection Two',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '2,3',
				      "needle-size-mm" : '2.75,3.25',
				      "yardage" : '1862-2940',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/somebunnyslove/243510237/WINDERMERE_SHOT_01_099_medium2.png',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/somebunnyslove/243510226/WINDERMERE_SHOT_01_038_medium2.png'});

            
    patterns.insertOne({"id" : 15,
                      "name" : 'Paper Dolls',
				      "designer" : 'Kate Davies',
				      "publication" : 'Paper Dolls',
				      "category" : 'Sweater',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '2.5,3,4',
				      "needle-size-mm" : '3,3.25,3.5',
				      "yardage" : '450-750',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/wazz/168036992/paperdolls5.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/wazz/168036930/paperdolls3_medium2.jpg'});

            
    patterns.insertOne({"id" : 16,
                      "name" : 'Baa-ble Hat',
				      "designer" : 'Donna Smith',
				      "publication" : 'Shetland Wool Week Annual',
				      "category" : 'Hat',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '6,7',
				      "needle-size-mm" : '4,4.5',
				      "yardage" : '330-404',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/Peeriedonna/298052615/image_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/Peeriedonna/298052390/image_medium.jpg'});

            
    patterns.insertOne({"id" : 17,
                      "name" : 'Stax',
				      "designer" : 'Carina Spencer',
				      "publication" : 'Ravelry',
				      "category" : 'Hat',
				      "yarn-weight" : 'Sport',
				      "needle-size-us" : '4',
				      "needle-size-mm" : '3.5',
				      "yardage" : '180-220',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/CarinaSpencer/271768686/DSC_8671-COVER-WEB_medium2.jpg',
				      "image2" : 'http://images4-cdn.ravelrycache.com/uploads/CarinaSpencer/271765300/DSC_8662-WEB.jpg'});

            
    patterns.insertOne({"id" : 18,
                      "name" : 'Snapdragon Tam',
				      "designer" : 'Tsolda Teague',
				      "publication" : 'Whimsical Little Knits 2',
				      "category" : 'Hat',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '180-260',
				      "image1" : 'http://farm3.static.flickr.com/2525/3904527198_541e0c4cfa_z.jpg',
				      "image2" : 'http://farm4.static.flickr.com/3511/3903749241_d4c21f2ef2_z.jpg'});

            
    patterns.insertOne({"id" : 19,
                      "name" : 'Barley',
				      "designer" : 'tincanknits',
				      "publication" : 'Tin Can Knits',
				      "category" : 'Hat',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '6,8',
				      "needle-size-mm" : '4,5',
				      "yardage" : '70-170',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/tincanknits/177099038/SC-barley-06_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/tincanknits/177099058/SC-barley-02_medium.jpg'});

            
    patterns.insertOne({"id" : 20,
                      "name" : 'Molly',
				      "designer" : 'Erin Ruth',
				      "publication" : 'Knit Me A Song',
				      "category" : 'Hat',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '3,6',
				      "needle-size-mm" : '3.25,4',
				      "yardage" : '200-236',
				      "image1" : 'http://farm5.static.flickr.com/4011/4199053816_657fdcbe3f_z.jpg',
				      "image2" : 'http://farm3.static.flickr.com/2567/4198300373_3ffeed1497_z.jpg'});

            
    patterns.insertOne({"id" : 21,
                      "name" : 'Regular Guy Beanie',
				      "designer" : 'Chuck Wright',
				      "publication" : 'Yarnman Knits',
				      "category" : 'Hat',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '100',
				      "image1" : 'http://farm4.static.flickr.com/3319/3261355098_489c6d10c6_z.jpg',
				      "image2" : 'http://farm4.static.flickr.com/3448/3267726051_5f73fb6048_z.jpg'});

            
    patterns.insertOne({"id" : 22,
                      "name" : 'String',
				      "designer" : 'String',
				      "publication" : 'String',
				      "category" : 'Sweater',
				      "yarn-weight" : 'String',
				      "needle-size-us" : 'String',
				      "needle-size-mm" : 'String',
				      "yardage" : 'String',
				      "image1" : 'String',
				      "image2" : 'String'});

            
    patterns.insertOne({"id" : 23,
                      "name" : 'Star Crossed Slouchy Beret',
				      "designer" : 'Natalie Larson',
				      "publication" : 'Natalie Larson Designs',
				      "category" : 'Hat',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '11',
				      "needle-size-mm" : '8',
				      "yardage" : '150-200',
				      "image1" : 'http://farm4.static.flickr.com/3036/2715405787_14755d401e_z.jpg',
				      "image2" : 'http://farm4.static.flickr.com/3245/2953965375_cf582bdc72_z.jpg'});

            
    patterns.insertOne({"id" : 24,
                      "name" : 'Pandamonium',
				      "designer" : 'Karin Michele',
				      "publication" : 'i K n i t 2 P u r l 2',
				      "category" : 'Hat',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '6,7',
				      "needle-size-mm" : '4,4.5',
				      "yardage" : '410-450',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/iknit2purl2/400634379/IMG_5913_medium2.JPG',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/aljanet/433275065/IMG_2500_medium2.JPG'});

            
    patterns.insertOne({"id" : 25,
                      "name" : 'Hiker\'s Waistcoat',
				      "designer" : 'The Fibre Company',
				      "publication" : 'Kelbourne Woollens',
				      "category" : 'Vest',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '7,8',
				      "needle-size-mm" : '4.5,5',
				      "yardage" : '700-900',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/FibreCompany/143369516/hikers2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/FibreCompany/143369517/hikers1_medium2.jpg'});

            
    patterns.insertOne({"id" : 26,
                      "name" : 'Nordic Trail',
				      "designer" : 'Elizabeth Smith',
				      "publication" : 'The Brown Stitch',
				      "category" : 'Vest',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '10',
				      "needle-size-mm" : '6',
				      "yardage" : '460-780',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/elizknits/142073883/Nordic-Trail_1_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/elizknits/142073896/Nordic-Trail_2_medium.jpg'});

            
    patterns.insertOne({"id" : 27,
                      "name" : 'Shoreline Vest',
				      "designer" : 'Carrie Bostick Hodge',
				      "publication" : 'Swoon Maine',
				      "category" : 'Vest',
				      "yarn-weight" : 'Sport',
				      "needle-size-us" : '4,5',
				      "needle-size-mm" : '3.5,3.75',
				      "yardage" : '645-1221',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/madder/335945304/DSC_7535_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/madder/335935408/DSC_7522R_medium2.jpg'});

            
    patterns.insertOne({"id" : 28,
                      "name" : 'Shawl Collar Vest',
				      "designer" : 'Jennifer Miller',
				      "publication" : 'Ottermoondesigns',
				      "category" : 'Vest',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '11',
				      "needle-size-mm" : '8',
				      "yardage" : '440-720',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/otterness/63807286/shawl_vest_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/otterness/63807471/DSC02118_medium2.JPG'});

            
    patterns.insertOne({"id" : 29,
                      "name" : 'Anna Vest',
				      "designer" : 'Karen Templer',
				      "publication" : 'Farm To Needle',
				      "category" : 'Vest',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '4,5,7',
				      "needle-size-mm" : '3.5,3.75,4.5',
				      "yardage" : '520-968',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/GriffinCreek/328272074/Teaser-17_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/GriffinCreek/328271723/Teaser-13_medium2.jpg'});

            
    patterns.insertOne({"id" : 30,
                      "name" : 'Caldwell',
				      "designer" : 'Stephen West',
				      "publication" : 'Wool People Vol. 1',
				      "category" : 'Vest',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '6,7',
				      "needle-size-mm" : '4,4.5',
				      "yardage" : '730-1130',
				      "image1" : 'http://farm9.static.flickr.com/8370/8517321167_0dfc6f5b7f_z.jpg',
				      "image2" : 'http://farm9.static.flickr.com/8512/8517318421_1143a24b6b_b.jpg'});

            
    patterns.insertOne({"id" : 31,
                      "name" : 'Buttonbox',
				      "designer" : 'Elizabeth McCarten',
				      "publication" : 'Knitty',
				      "category" : 'Vest',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '561-1373',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/emccarten/151634600/IMG_3829_medium2.JPG',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/emccarten/151695435/IMG_5371_medium2.JPG'});

            
    patterns.insertOne({"id" : 32,
                      "name" : 'Dr. G\'s Memory Vest',
				      "designer" : 'Kirsten Kapur',
				      "publication" : 'Through The Loops',
				      "category" : 'Vest',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '6,8',
				      "needle-size-mm" : '4,5',
				      "yardage" : 'N/A',
				      "image1" : 'http://farm4.static.flickr.com/3124/2332182340_c465cc64e8_z.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/elisann/202542274/DSC_1347_medium2.jpg'});

            
    patterns.insertOne({"id" : 33,
                      "name" : 'Saroyan',
				      "designer" : 'Liz Abinante',
				      "publication" : 'Feministy.com',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '10',
				      "needle-size-mm" : '6',
				      "yardage" : '350-370',
				      "image1" : 'http://farm3.static.flickr.com/2732/4109424385_9b281d9124_z.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/chibitora/189766559/saroyan_6_medium2.JPG'});

            
    patterns.insertOne({"id" : 34,
                      "name" : 'ZickZack Scarf',
				      "designer" : 'Christy Kamm',
				      "publication" : 'Christy Kamm Designs',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '2.5',
				      "needle-size-mm" : '3',
				      "yardage" : '831',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/JadziaDax/269808696/missonistyle2_medium.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/JadziaDax/269808695/zickzack2_medium2.jpg'});

            
    patterns.insertOne({"id" : 35,
                      "name" : 'Gallatin Scarf',
				      "designer" : 'Kris Basta',
				      "publication" : 'Kriskrafter',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '10.5',
				      "needle-size-mm" : '6.5',
				      "yardage" : '190-200',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/kriskrafter/180501259/MVC-009L_medium2.JPG',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/Christinastrikker/429874263/image_medium2.jpg'});

            
    patterns.insertOne({"id" : 36,
                      "name" : 'No-Purl Ribbed Scarf',
				      "designer" : 'Purl Soho',
				      "publication" : 'Purl Soho',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '8',
				      "needle-size-mm" : '5',
				      "yardage" : '436-545',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/purlsoho/252648850/no-purl-ribbed-scarf-600-B-1-2-340x441_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/purlsoho/425773695/no-purl-ribbed-scarf-2017-600-2_medium2.jpg'});

            
    patterns.insertOne({"id" : 37,
                      "name" : 'Irish Hiking Scarf',
				      "designer" : 'Adrian Bizilia',
				      "publication" : 'Hello Yarn',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '8',
				      "needle-size-mm" : '5',
				      "yardage" : '350',
				      "image1" : 'http://farm4.static.flickr.com/3422/3349495151_d5861eccea_z.jpg',
				      "image2" : 'http://farm1.static.flickr.com/32/61028885_d22b0484df_z.jpg'});

            
    patterns.insertOne({"id" : 38,
                      "name" : 'Architexture',
				      "designer" : 'Jennifer Weissman',
				      "publication" : 'Designs by Jennifer Weissman',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '5',
				      "needle-size-mm" : '3.75',
				      "yardage" : '775-1025',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/shadystroll/290327621/DSC_0188_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/shadystroll/290327648/DSC_0168_medium2.JPG'});

            
    patterns.insertOne({"id" : 39,
                      "name" : 'Wildheart',
				      "designer" : 'Janina Kallio',
				      "publication" : 'Woolenberry',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '395-437',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/JaninaKallio/431707868/Wildheart_by_Janina_Kallio_22_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/JaninaKallio/431707865/Wildheart_by_Janina_Kallio_21_medium2.jpg'});

            
    patterns.insertOne({"id" : 40,
                      "name" : 'Baker Street Scarf',
				      "designer" : 'Toni Carr',
				      "publication" : 'Geek Knits',
				      "category" : 'Scarf',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '360-375',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/JoanofDark/307719825/Baker_Street_Scarf_Main_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/JoanofDark/307720212/knitty_scarf_medium2.jpg'});

            
    patterns.insertOne({"id" : 41,
                      "name" : 'Echoes from Karelia',
				      "designer" : 'Tiina Kuu',
				      "publication" : 'Tiina Kuu Knitwear',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '0,1.5',
				      "needle-size-mm" : '2,2.5',
				      "yardage" : 'N/A',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/TiiQ/385098086/EchoesfromKarelia3_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/pikasintti/377938661/image_medium2.jpeg'});

            
    patterns.insertOne({"id" : 42,
                      "name" : 'Scull Candy',
				      "designer" : 'Line Eriksen',
				      "publication" : 'Ravelry',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1.5,2.5',
				      "needle-size-mm" : '2.5,3',
				      "yardage" : '219-241',
				      "image1" : 'http://images4-cdn.ravelrycache.com/uploads/LineEriksenDesign/440863909/17499506_10206345167026589_943833145056120869_n.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/LineEriksenDesign/440863911/17626327_1846049059001113_7788914315972799040_n_medium.jpg'});

            
    patterns.insertOne({"id" : 43,
                      "name" : 'Almondine',
				      "designer" : 'Anne Hanson',
				      "publication" : 'Sock Knitting Master Class',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1',
				      "needle-size-mm" : '2.25',
				      "yardage" : '437',
				      "image1" : 'http://farm6.static.flickr.com/5039/5912854037_f5971024e6_b.jpg',
				      "image2" : 'http://farm6.static.flickr.com/5312/5913415728_4f072b2e0a_z.jpg'});

            
    patterns.insertOne({"id" : 44,
                      "name" : 'Hermione\'s Everyday Socks',
				      "designer" : 'Erica Lueder',
				      "publication" : 'Dreams in Fiber',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1',
				      "needle-size-mm" : '2.25',
				      "yardage" : '350-400',
				      "image1" : 'http://farm4.static.flickr.com/3240/3704532404_227f070d7a_z.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/snippetsandstash/102807366/IMG_9323edit_medium2.jpg'});

            
    patterns.insertOne({"id" : 45,
                      "name" : 'Blueberry Waffle Socks',
				      "designer" : 'Sandy Turner',
				      "publication" : 'Knitting on the Net',
				      "category" : 'Socks',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '5',
				      "needle-size-mm" : '3.75',
				      "yardage" : '280-330',
				      "image1" : 'http://farm5.static.flickr.com/4066/4210895156_95a6fcb48e_z.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/Avalanche/48637691/Mistletoes4_medium2.jpg'});

            
    patterns.insertOne({"id" : 46,
                      "name" : 'Zigzagular Socks',
				      "designer" : 'Susie White',
				      "publication" : 'Prairie Girl Designs',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1.5',
				      "needle-size-mm" : '2.5',
				      "yardage" : '360-420',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/JennyF/238110600/zlah_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/knitastic/235038815/Zigzagular_1_medium.jpg'});

            
    patterns.insertOne({"id" : 47,
                      "name" : 'Vanilla is the New Black',
				      "designer" : 'Anneh Fletcher',
				      "publication" : 'A Vanilla Pair',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1.5',
				      "needle-size-mm" : '2.5',
				      "yardage" : '300-440',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/anneh/359345003/IMG_2968_medium2.JPG',
				      "image2" : 'http://farm8.static.flickr.com/7543/26597788803_0a7f7034bb_b.jpg'});

            
    patterns.insertOne({"id" : 48,
                      "name" : 'Dropping Madness Socks',
				      "designer" : 'Maria Ekblad',
				      "publication" : 'Sock Madness 11',
				      "category" : 'Socks',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '1',
				      "needle-size-mm" : '2.25',
				      "yardage" : '361-481',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/stickfia/437115506/P1000123b_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/stickfia/437115992/P1000126b_medium2.jpg'});

            
    patterns.insertOne({"id" : 49,
                      "name" : 'Chevron Baby BLanket',
				      "designer" : 'Purl Soho',
				      "publication" : 'Purl Soho',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '11',
				      "needle-size-mm" : '3',
				      "yardage" : '609',
				      "image1" : 'http://farm9.static.flickr.com/8347/8232715812_b0688be73d_z.jpg',
				      "image2" : 'http://farm9.static.flickr.com/8204/8231654275_6cca29c03d_z.jpg'});

            
    patterns.insertOne({"id" : 50,
                      "name" : 'Wool Leaves',
				      "designer" : 'Jared Flood',
				      "publication" : 'Jared Flood',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '13',
				      "needle-size-mm" : '9',
				      "yardage" : '630-650',
				      "image1" : 'http://farm3.static.flickr.com/2799/4290756155_7372f7fc94_z.jpg',
				      "image2" : 'http://farm3.static.flickr.com/2709/4291495500_922b6d9399_z.jpg'});

            
    patterns.insertOne({"id" : 51,
                      "name" : 'Garter Squish',
				      "designer" : 'Stephen West',
				      "publication" : 'Stephen West Designs',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '15',
				      "needle-size-mm" : '10',
				      "yardage" : '3240-3245',
				      "image1" : 'http://farm9.static.flickr.com/8212/8289449722_f8733c990b_z.jpg',
				      "image2" : 'http://farm9.static.flickr.com/8483/8288387413_1908fe7c67_z.jpg'});

            
    patterns.insertOne({"id" : 52,
                      "name" : 'Hue Shift Afghan',
				      "designer" : 'Kerin Dimeler-Laurence',
				      "publication" : 'Knit Picks',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Sport',
				      "needle-size-us" : '5',
				      "needle-size-mm" : '3.75',
				      "yardage" : '3276',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/KPStaff/327855333/55773220_6_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/KPStaff/327855449/41112220_medium.jpg'});

            
    patterns.insertOne({"id" : 53,
                      "name" : 'Garter Rib Baby Blanket',
				      "designer" : 'Orange Flower Yarn',
				      "publication" : 'Orange Flower Yarn',
				      "category" : 'Blanket',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : 'N/A',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/sketchbook/26657359/blanket_1_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/SusanneS-vV/102976363/DSC_0841_medium2.jpg'});

            
    patterns.insertOne({"id" : 54,
                      "name" : 'Diagonal Comfort Blanket',
				      "designer" : 'Lion Brand Yarn',
				      "publication" : 'Lion Brand Yarn',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '828',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/mckenzif/106113432/90029ada_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/mtsharon/118230568/yarma_medium2.jpg'});

            
    patterns.insertOne({"id" : 55,
                      "name" : 'Carson Throw',
				      "designer" : 'Rosemary Hill',
				      "publication" : 'Home is Where the Heart is',
				      "category" : 'Blanket',
				      "yarn-weight" : 'Bulky',
				      "needle-size-us" : '10',
				      "needle-size-mm" : '6',
				      "yardage" : '2800-3325',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/Romi/192310202/8-CT_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/theirmama4sure/372077071/IMG_1001_medium2.jpg'});

            
    patterns.insertOne({"id" : 56,
                      "name" : 'Baby\'s First Principles',
				      "designer" : 'Amy Manning',
				      "publication" : 'Doomsday Knits: Projects for the Apocalypse and After',
				      "category" : 'Blanket',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '4,5',
				      "needle-size-mm" : '3.5,3.75',
				      "yardage" : 'N/A',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/alextinsley/187262218/NW14_medium.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/alextinsley/187262213/IMG_2390_medium.jpg'});

            
    patterns.insertOne({"id" : 57,
                      "name" : 'Ballydesmond',
				      "designer" : 'Irishgirlieknits',
				      "publication" : 'Irish Girlie Knits',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'FWorsted',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '185',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/irishgirlieknits/335675421/Ballydesmond.5_medium2.JPG',
				      "image2" : 'http://images4-cdn.ravelrycache.com/uploads/MadMad/339063472/IMG_8633.JPG'});

            
    patterns.insertOne({"id" : 58,
                      "name" : 'Fightin\' Words',
				      "designer" : 'Annie Watts',
				      "publication" : 'Wattsolak Designs',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Fingering',
				      "needle-size-us" : '3,2,1',
				      "needle-size-mm" : '3.25,2.75,2.25',
				      "yardage" : 'N/A',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/wattsolak/108513402/11703220_2_medium2.jpg',
				      "image2" : 'https://images4-b.ravelrycache.com/uploads/wattsolak/95943085/IMG_1374_medium.jpg'});

            
    patterns.insertOne({"id" : 59,
                      "name" : 'Maize',
				      "designer" : 'tincanknits',
				      "publication" : 'Tin Can Knits',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '6',
				      "needle-size-mm" : '4',
				      "yardage" : '50-200',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/tincanknits/187135959/SC-maize-02_medium.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/tincanknits/187135961/SC-maize-05_medium2.jpg'});

            
    patterns.insertOne({"id" : 60,
                      "name" : 'Tartan & Tweed Mitts',
				      "designer" : 'Jen Joyce',
				      "publication" : 'Jenjoyce Designs',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'DK',
				      "needle-size-us" : '3,4,5,6',
				      "needle-size-mm" : '3.25,3.5,3.75,4',
				      "yardage" : '130-150',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/Jenjay/281787200/jenjoycedesign004_medium2.JPG',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/Jenjay/287209169/026jenjoycedesign_medium2.JPG'});

            
    patterns.insertOne({"id" : 61,
                      "name" : 'Lambing Mitts',
				      "designer" : 'Veronika Jobe',
				      "publication" : 'Tolt Yarn and Wool',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Aran',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '115-150',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/veronika/284538768/FullSizeRender-2_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/GriffinCreek/284519625/IMG_8014_medium2.jpg'});

            
    patterns.insertOne({"id" : 62,
                      "name" : 'Treads',
				      "designer" : 'Victoria Anne Baker',
				      "publication" : 'RainDrops',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '5',
				      "needle-size-mm" : '3.75',
				      "yardage" : '150-200',
				      "image1" : 'http://farm3.static.flickr.com/2766/4494618241_ffcf50d84e_z.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/Lolotte1409/47408797/mittensfinies_003_medium2.jpg'});

            
    patterns.insertOne({"id" : 63,
                      "name" : 'Man Hands',
				      "designer" : 'Shireen Nadir',
				      "publication" : 'The Blue Brick',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '7',
				      "needle-size-mm" : '4.5',
				      "yardage" : '140-160',
				      "image1" : 'https://images4-e.ravelrycache.com/uploads/shireenn/220824557/3V8A3778_medium2.jpg',
				      "image2" : 'http://images4-cdn.ravelrycache.com/uploads/shireenn/220824561/DSCF1930.jpg'});

            
    patterns.insertOne({"id" : 64,
                      "name" : 'Masonry Mitts',
				      "designer" : 'Vera Brosgol',
				      "publication" : 'Vera Brosgol Designs',
				      "category" : 'Fingerless Mitts',
				      "yarn-weight" : 'Worsted',
				      "needle-size-us" : '4,5',
				      "needle-size-mm" : '3.5,3.75',
				      "yardage" : '140',
				      "image1" : 'https://images4-b.ravelrycache.com/uploads/verabee/215178590/armymitts4_medium2.jpg',
				      "image2" : 'https://images4-e.ravelrycache.com/uploads/verabee/215178689/armymitts2_medium2.jpg'});

            
//    patterns.insertOne({"id" : 000,
//                      "name" : 'String',
//				      "designer" : 'String',
//				      "publication" : 'String',
//				      "category" : 'String',
//				      "yarn-weight" : 'String',
//				      "needle-size-us" : 'String',
//				      "needle-size-mm" : 'String',
//				      "yardage" : 'String',
//				      "image1" : 'String',
//				      "image2" : 'String'});

    console.log("Data Loaded");
    
    //--------------Server-Run-----------//
    
//    urlExists('http://localhost:3000', function (err, exists) {
//        running = exists;
//        console.log(exists);
//    });
    
//    if(running){
        app.listen(3000).close();
        console.log('Old server instance closed');
//    }
    
	app.listen(3000);
	console.log("Server listening on port 3000."); 

}());