"use strict";

var Cladonia = {"name" : "Cladonia",
			    "designer" : "Kirsten Kapur",
			    "publication" : "Through The Loops",
			    "category" : "Shawl",
			    "yarn-weight" : "Fingering",
			    "needle-size-us" : "7",
			    "needle-size-mm" : "4.5",
			    "yardage" : "520 - 550",
			    "image1" : "https://images4-e.ravelrycache.com/uploads/throughtheloops/296361404/1294_galezucker0314_TTL_medium2.jpg",
			    "image2" : "http://farm6.static.flickr.com/5148/5658365207_e59e6fec2b_z.jpg"
			   };

   var WaitingForRain = {"name" : "Waiting For Rain",
			    "designer" : "Sylvia McFadden",
			    "publication" : "Softsweater Knits",
			    "category" : "Shawl",
			    "yarn-weight" : "Fingering",
			    "needle-size-us" : "6",
			    "needle-size-mm" : "4.0",
			    "yardage" : "760 - 800",
			    "image1" : "http://images4-cdn.ravelrycache.com/uploads/softsweater/355112954/image.jpeg",
			    "image2" : "http://farm2.static.flickr.com/1627/24600325983_fb5eeca8e6_b.jpg"
			   };

   var NordicTrail = {"name" : "Nordic Trail",
			    "designer" : "Elizabeth Smith",
			    "publication" : "The Brown Stitch",
			    "category" : "Vest",
			    "yarn-weight" : "Bulky",
			    "needle-size-us" : "10",
			    "needle-size-mm" : "6.0",
			    "yardage" : "480 - 780",
			    "image1" : "https://images4-e.ravelrycache.com/uploads/elizknits/142073883/Nordic-Trail_1_medium.jpg",
			    "image2" : "https://images4-b.ravelrycache.com/uploads/elizknits/142073896/Nordic-Trail_2_medium.jpg"
			   };

var Stax = {"name" : "Stax",
            "image1" : "https://images4-b.ravelrycache.com/uploads/CarinaSpencer/271768686/DSC_8671-COVER-WEB_medium2.jpg"};

var getPattern = function(pattern) {
    $("div#insert").append('<div class="w3-quarter w3-padding-small"><ul class="w3-border w3-ul"><li><p class="w3-circle w3-image patternDisplay" style="background-image:url(' + pattern.image1 + '")"></p></li> <li class="w3-center w3-hover-shadow openDisplay">' + pattern.name + '</li></div>');
}

getPattern(Cladonia);
getPattern(WaitingForRain);
getPattern(NordicTrail);
getPattern(Stax);