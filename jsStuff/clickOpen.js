//Authors: Justin Blankinship, Kaitlin Porter, Michael Parker, Dahquan Williams
//CSCI 334 Final : A Full Stack Application

"use strict";

$("li.openDisplay").click(function () {
   document.getElementById("display").style.display = "block";
});

$("#closeDisplay").click(function () {
   document.getElementById("display").style.display = "none";
});