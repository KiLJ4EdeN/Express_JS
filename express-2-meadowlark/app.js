var express = require('express');
var fortune = require('./lib/fortune');
var lucky = require('./lib/lucky')
var app = express();

app.use(express.static(__dirname + '/public'));

// set up handlebars view engine
var handlebars = require('express3-handlebars')
.create({ defaultLayout:'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);


// app endpoints
app.get('/', function(req, res){
        res.render('home');
        });


// render random fortunes in about page
app.get('/about', function(req, res){
        res.render('about', { fortune: fortune.getFortune() });
        });

// render random number as lucky number
app.get('/lucky', function(req, res){
        res.render('lucky', { luck: lucky.getLuck() });
        });


// custom 404 page
app.use(function(req, res, next){
        res.status(404);
        res.render('404')
});

// custom 500 page
app.use(function(err, req, res, next){
        console.error(err.stack);
        res.status(500);
        res.render('500')
});


app.listen(app.get('port'), function(){
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});
