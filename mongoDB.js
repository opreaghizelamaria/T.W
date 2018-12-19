var MongoClient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyDataBase");
  dbo.collection("MyDataBase").find().toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

const express = require('express');
const app = express();
const port = 3000;
app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/MyDataBase',function(req,resp){
    MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MyDataBase");
        dbo.collection("MyDataBase").find().toArray(function(err, result) {
          if (err) throw err;
          resp.send(result);
          db.close();
});});
});

app.get('/MyDataBase/id',function(req,resp){
    MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
        if (err) throw err;
        var dbo = db.db("MyDataBase");
        dbo.collection("MyDataBase").find({}, { projection: { _id: 1 } }).toArray(function(err, result) {
          if (err) throw err;
          resp.send(result);
          db.close();
        });
});
});
/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url,{useNewUrlParser:true}, function(err, db) {
  if (err) throw err;
  var dbo = db.db("MyDataBase");
  dbo.collection("MyDataBase").find({}, { projection: { _id: 1 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});*/