// 1. lépés: parancssorba npm init
// 2. lépés: npm install express body-parser --save

var express = require('express');
var bodyParser = require('body-parser');

// létrehozok egy expressjs szerveralkalmazást
var app = express();

app.use(bodyParser.urlencoded(
    {'extended': true}));
app.use(bodyParser.json());

var router = express.Router();

//definiálom a route-okat
router.get('/about', function (req, res) {
  res.send({"message": 'Ez egy minta'})
});

router.post('/about', function(req, res) {
    console.log("Hello a nevem " + req.body.username 
    + " " + req.body.age + " éves vagyok és " + 
    req.body.foglalkozas);
    if(req.body.foglalkozas) {
        return res.status(200).send({"message": "Köszönöm az infót"});
    }
    return res.status(404).send({"message": "Ne aggodj valojaban minden oké"});
});

//élesítem a route-okat
app.use('/', router);

app.listen(3500, function() {
    console.log('A szerver fut port 3500-on');
});

// 3. lépés: node app.js  
// 4. lépés: a leállítása a Ctrl+C-vel történik   