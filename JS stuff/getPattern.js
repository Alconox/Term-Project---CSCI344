/* gets pattern image and name from database and places it into an individual div to be appended to a div with the id insert*/

"use strict";

var getPattern = function(pattern) {
    $("div#insert").append('<div class="w3-quarter w3-padding-small"><ul class="w3-border w3-ul"><li><p class="w3-circle w3-image patternDisplay" style="background-image:url(' + pattern.image1 + '")"></p></li> <li class="w3-center w3-hover-shadow openDisplay">' + pattern.name + '</li></div>');
};