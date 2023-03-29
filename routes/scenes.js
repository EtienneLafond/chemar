var express = require('express');
var router = express.Router();
var fs = require('fs');

//Get scenes page
router.get('/', function(req, res, next) {
  let scenes = fs.readdirSync('./public/scenefiles/')
  
  res.render('scenes', {title: 'Scene Manager', list: scenes, isAdmin: true});
});

module.exports = router;