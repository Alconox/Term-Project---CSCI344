//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

/* gets pattern image and name from database and places it into an individual div to be appended to a div with the id insert*/
"use strict";

var getPattern = function (pattern) {
   $("div#insert").append('<div class="w3-quarter w3-padding-small w3-margin-bottom"><ul class="w3-border w3-ul"><li class="w3-theme w3-large w3-center">' + pattern.name + '</li><li><p class="w3-round-large w3-image patternDisplay" style="background-image:url(' + pattern.image1 + '")"></p></li> <li class="w3-center w3-hover-shadow w3-teal openDisplay">View ' + pattern.name + '</li></div>');
};