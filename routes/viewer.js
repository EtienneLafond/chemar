var express = require('express');
var router = express.Router();
var fs = require('fs'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('viewer', {
    title: 'Molecule Viewer'
  });
});

router.get('/:id', function(req , res){
  var molfiles = fs.readdirSync('./public/molfiles/')

  if(molfiles.includes(req.params.id + '.mol')){
    molfile = fs.readFileSync('./public/molfiles/'+req.params.id+'.mol', 'utf8');
    res.render('viewer', {
      title: 'Molecule Viewer', 
      item: req.params.id
    });
  }else{
    res.render('viewer', {
      title: 'Molecule Viewer', 
      item: 2519
    });  
  }
});

module.exports = router;
