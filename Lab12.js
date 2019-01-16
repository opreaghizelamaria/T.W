var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mysql = require('mysql');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/Lab12.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    var sql="INSERT INTO mesaj (mesaj) VALUES (?)";

    con.query(sql,msg, function (err, result, fields) {
      if (err) throw err;
      console.log("ferf");
    });
    con.query("Select * FROM mesaj", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
          io.emit('chat message', result);

    });
    // io.emit('chat message', msg);
    // console.log(msg);


    
  });
});

    
  var con = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "password",
      database: "Mesaje"
    });
    

http.listen(3000, function(){
  console.log('listening on *:3000');
});