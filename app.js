var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.listen(3000);

//rendering 'any' page (can use post as well)
app.get('/', function(req, res){
  res.render('home');
});

//rendering the about page (can use post as well)
app.get('/about', function(req, res) {
  res.render('about');
});

//handling route error (can use post as well)
app.get('*', function(req, res){
  res.render('error');
});
