var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('addMolecule', {title: 'Add New Molecule'});
});

module.exports = router;