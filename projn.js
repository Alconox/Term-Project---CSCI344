var express = require('express');
var mongoose = require('mongoose');
var Work= mongoose.model('Work');
var router = express.Router();

router.get('/teams', function (req, res, next) {
  Team.find().sort('name').exec(function (error, results) {
    if (error) {
      return next(error);
    }
/*
router.get('/teams', function (req, res, next) {
  Team.find().sort('name').exec(function (error, results) {
    if (error) {
      return next(error);
    }
*/
    // Respond with valid data
    res.json(results);
  });
});

router.get('/teams/:teamId', function (req, res, next) {
  Team.findOne({
    _id: req.params.teamId
  }, function (error, results) {
    if (error) {
      return next(error);
    }

    res.json(results);
  });
});

module.exports = router;
//Call Express 

var express = require('express');
var app = express();
app.use(express.static(__dirname));
app.listen(3000);

console.log("Server running on port 3000");


