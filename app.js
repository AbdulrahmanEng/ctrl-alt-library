var express = require('express');

var app = express();

var port = process.env.PORT ||  3000;

app.use(express.static('public'));
app.set('views',('./src/views'));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', {title: "Home", list: ['alpha','theta']});
});

app.get('/books', function(req, res) {
  res.send('Books');
});

app.listen(port, function(){
  console.log('Running server on port ' + port);
});
