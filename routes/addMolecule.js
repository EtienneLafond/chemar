var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('addMolecule', {title: 'Add New Molecule'});
});

// Submit button
router.post('/', (req, res) => {
    console.log(req.body.file);
    res.send('POST request to the homepage')
});

module.exports = router;