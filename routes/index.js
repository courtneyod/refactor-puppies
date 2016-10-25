"use strict"
var express = require('express');
var router = express.Router();
const newPuppy = require('../models/puppy.js').puppies;
var puppyList = require('../models/puppy.js').puppiesList;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('site/index', {puppyList});
});

router.get('/about', function(req, res, next){
  res.render('site/about')
})

router.get('/contact', function(req, res, next){
  res.render('site/contact')
})

module.exports = router;
