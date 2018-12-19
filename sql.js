

var mysql = require('mysql');
/*
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "sqlDataBase"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM sqlTabel", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
*/

const express = require('express');
const app = express();
const port = 3000;
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Pass to next layer of middleware
    next();
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/sqlDataBase',function(req,resp){
    
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "sqlDataBase"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM sqlTabel", function (err, result, fields) {
      if (err) throw err;
      resp.send(result);
    });
  });

});
/*


app.get('/sqlDataBase/id',function(req,resp){
    
    var con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "sqlDataBase"
      });
      
      con.connect(function(err) {
        if (err) throw err;
        con.query("SELECT id FROM sqlTabel", function (err, result, fields) {
          if (err) throw err;
          resp.send(result);
        });
      });
    
    });*/