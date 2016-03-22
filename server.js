//
// # SimpleServer
//
var http = require('http');
var path = require('path');
var express = require('express');
var router = express();
var server = http.createServer(router);
var mongojs = require("mongojs");
var db = mongojs('catalog', ['products']);
var bodyParser = require('body-parser');

//body parser middle ware
router.use(bodyParser.json());

//index page
router.get('/',function(req,res){
  res.send('It Works!');
});

//get all products
router.get('/products',function(req,res){
  console.log("Fetching products");
  db.products.find(function(err,docs){
    if(err){
      res.send(err);
    }else{
      console.log("sending products");
      res.json(docs);
    }
  });
});

//get single product with given id
router.get('/products/:id',function(req,res){
  console.log("Fetching products");
  db.products.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,doc){
    if(err){
      res.send(err);
    }else{
      console.log("sending product " + req.params.id);
      res.json(doc);
    }
  });
});

//add product
router.post('/products', function(req, res){
  console.log('adding product');
  db.products.insert(req.body, function(err,doc){
    if(err){
      res.send(err);
    }else{
      console.log("added product.. "+ doc._id);
      res.json(doc);
    }
  });
})

//update product
router.put('/products/:id', function(req, res){
  console.log('updating product');
  db.products.findAndModify({
    query:{_id:mongojs.ObjectId(req.params.id)},
    update:{ $set:{
        name:req.body.name,
        category: req.body.category,
        description: req.body.description
      }
    },
    new: true
  }, function(err,doc){
    if(err){
      res.send(err);
    }else{
      console.log("updated product.. "+ doc._id);
      res.json(doc);
    }
  });
})

//todo: delete product


//start server
server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
