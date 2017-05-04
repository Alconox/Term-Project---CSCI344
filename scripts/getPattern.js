//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

"use strict";

var getPatterns = function(filter) {
  $.getJSON("data.json", function(result){
      $.each(result, function(i, field){
          $("div#insert").append('<div class="w3-quarter w3-padding-small w3-margin-bottom ' + field.category + ' displayDiv"><ul class="w3-border w3-ul"><li><p class="w3-round-large w3-image patternDisplay" style="background-image:url(' + field.image1 + '")"></p></li> <li class="w3-center w3-teal">' + field.name + '</li></div>');
      });
   $("div#insert").find(".displayDiv").not("." + filter).remove();
  });
};