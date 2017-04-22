(function () {

	var main = function() {
		var MongoClient = require('mongodb').MongoClient,
		    dbhost = 'mongodb://localhost:3000/examples',
			  myCollection = 'chapter2';

		var seedData = function(db, callback) {
			db.collection(myCollection).find()
	     	.toArray(function(err, docs) {
									var toinsert = 2,
											inserted = 0;

									if (docs.length <= 0) {
										console.log('No data. Seeding...');
										var ihandler = function(err, res) {
											if (err) throw err;
											inserted++;
										};
										
										db.collection(myCollection).insert({
											'Title': 'Snow Crash',
											'Author': 'Neal Stephenson'
										}, ihandler);
										db.collection(myCollection).insert({
											'Title': 'Neuromancer',
											'Author': 'William Gibson'
										}, ihandler);
										
										var sync = setInterval(function() {
											if (inserted === toinsert) {
												clearInterval(sync);
												callback(db);
											}
										}, 50);
										return;
									}
									callback(db);
									return;
			});
		};

		var showDocs = function(db) {
			console.log('Listing books:');
			var options = {sort: [['Title', 1]]};
			db.collection(myCollection).find({}, {}, options)
		   	.toArray(function(err, docs) {
		              if (err) throw err;
									for (var d=0; d<docs.length; d++)
										console.log(docs[d].Title + '; ' + docs[d].Author);
									db.close();
			});
		};
							
		MongoClient.connect(dbhost, function(err, db) {
			if (err) throw err;
				seedData(db, showDocs);
		});
	};
	
	main();
}());