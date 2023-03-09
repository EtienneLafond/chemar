var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('addMolecule', {title: 'Add New Molecule'});
});

// Submit button
router.post('/', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.formula);
    console.log(req.body.fileName);
    console.log(req.body.preview);
   // const selectedFile = req.getElementById("file").files[0];
    //res.send('POST request to the homepage')

    //var molfile = fs.readFileSync(req.body.fileName, 'utf8');
    //console.log(molfile);

    //res.send('POST request to the homepage')
});

module.exports = router;