var express = require('express');
var router = express.Router();
var fs = require('fs');

router.get('/', function(req, res, next) {
    res.render('addMolecule', {title: 'Add New Molecule'});
});

// Post request when clicking submit button
router.post('/', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.formula);
    console.log(req.body.fileName);
    console.log(req.body.preview);

    // Assign values from form to variables
    var molName = req.body.name;
    var molFormula = req.body.formula;
    var fileName = req.body.fileName;
    var molFileContent = req.body.preview;

    // Create new mol file in ./public/molefiles/
    fs.writeFile('./public/molfiles/'+fileName, molFileContent, function (err) {
        if (err) throw err;
        console.log('New melecule created');
    });

    // Return to catalog page
    res.redirect('/catalog');

   // const selectedFile = req.getElementById("file").files[0];
    //res.send('POST request to the homepage')

    //var molfile = fs.readFileSync(req.body.fileName, 'utf8');
    //console.log(molfile);

    //res.send('POST request to the homepage')
});

module.exports = router;