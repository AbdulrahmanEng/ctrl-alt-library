var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT ||  3000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
  secret:'ctrllibrary',
  name: 'library-save',
  resave: true,
  saveUninitialized:true
}));
require('./src/config/passport')(app);

app.set('views',('./src/views'));

app.set('view engine', 'ejs');

var nav = [
      {Link: '/Books',Text: 'Books'},
      {Link:'/Authors',Text:'Authors'}
    ];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);
var authRouter = require('./src/routes/authRoutes')(nav);

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
app.use('/Auth', authRouter);

app.listen(port, function(){
  console.log('Running server on port ' + port);
});
