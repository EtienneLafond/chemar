var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
//router.get('/', function(req, res, next) {
//    const molfiles = './public/molfiles/';
//    res.render('molecules', { title: 'Catalog', list: fs.readdirSync(molfiles), isAdmin: true});
//});

router.get('/', function(req, res, next) {
    const molfiles = './public/molfiles/';
    let molecule = JSON.parse(fs.readFileSync("./public/catalog/molfileCatalog.json"));
    let name,formula = "not found in catalog";
    res.render('molecules', { title: 'Catalog', list: fs.readdirSync(molfiles), mol: molecule,name: name, formula: formula, isAdmin: true});
    //console.log(molecule["702.mol"]);
});

module.exports = router;
