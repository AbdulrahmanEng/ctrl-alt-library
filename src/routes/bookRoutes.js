var express = require('express');

var bookRouter = express.Router();

var router = function(nav){

var books = [
  {title:'Digital Circuit Projects: An Overview of Digital Circuits Through Implementing Integrated Circuits',
  genre:'Hardware',
  author:'Charles W. Kann',
   authors:'',
   release:2014,
   read:false
  },
  {title:'How to think like a computer scientist',
  genre:'Theory',
  author:'Alan B. Downey',
   authors:'',
   release:2012,
   read:false
  },
  {title:'Bitcoin and Cryptocurrency Technologies',
  genre:'Software',
  author:'',
   authors:['A. Narayanan', 'J. Bonneau', 'E. Felten',
'A. Miller', 'S. Goldfeder'],
   read:false
  }
];
  
bookRouter.route('/')
          .get(function(req, res){
            res.render('bookListView', {
            title: "Books",
            nav: nav,
              books:books
            });
          });

bookRouter.route('/:id')
          .get(function(req, res){
            var id = req.params.id;
            res.render('bookView', {
            title: "Books",
            nav: nav,
              book:books[id]
            });
          });
  
  return bookRouter;
  
}

module.exports = router;