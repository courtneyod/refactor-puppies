"use strict"
var express = require('express');
var router = express.Router();
const newPuppy = require('../models/puppy.js').Puppy;

router.get("/new", function(req, res){
  res.render("puppies/form");
  //console.log(request.query)
});

var puppyArray = []
router.get('/', function(req, res) {
  console.log(req.query, "hi")
  var pup = new newPuppy(req.query.name, req.query.age)
  puppyArray.push(pup)
  res.sendStatus(302)
})

router.get('/:id', function(req, res){
  var dogId = (req.params.id);
  for (var i = 0; i < puppyArray.length; i++) {
    if(puppyArray[i].id === parseInt(dogId)) {
      // console.log("in the for loop");
      let name = puppyArray[i].name;
      let age = puppyArray[i].age;
      res.render("puppies/id", {puppiesName: name, puppiesAge: age});
    }
  }
});

module.exports = router;
