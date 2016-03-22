//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');
var router = express();
var server = http.createServer(router);
var mongojs = require("mongojs");
var db = mongojs('catalog', ['products']);
router.get('/',function(req,res){
  res.send('It Works!');
});

router.get('/products',function(req,res){
  console.log("Fetching products");
  db.products.find(function(err,docs){
    if(err){
      res.send(err);
    }else{
      console.log("sending products");
      res.json(docs);
    }
  })
});

router.get('/products/:id',function(req,res){
  console.log("Fetching products");
  db.products.findOne({_id:mongojs.ObjectId(req.params.id)},function(err,doc){
    if(err){
      res.send(err);
    }else{
      console.log("sending product " + req.params.id);
      res.json(doc);
    }
  })
});

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
