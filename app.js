var express = require('express');

var app = express();

var port = process.env.PORT ||  3000;

app.use(express.static('public'));
app.set('views',('./src/views'));

app.set('view engine', 'ejs');

var nav = [
      {Link: '/Books',Text: 'Books'},
      {Link:'/Authors',Text:'Authors'}
    ]

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.get('/', function(req, res) {
  res.render('index', {
    title: "Home",
    nav: [
      {Link: '/Books',Text: 'Books'},
      {Link:'/Authors',Text:'Authors'}
    ]
    });
  });

app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);

app.listen(port, function(){
  console.log('Running server on port ' + port);
});
