const express = require('express')
const app = express()
const port = 3000
const request=require('request')

app.use(express.static('/Users/opreaghizelamaria/Desktop/tw/public'))
app.get('/file', (req, res) => res.send('/Users/opreaghizelamaria/Desktop/tw/public/ex.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

/*
var fs = require('fs');
//3

fs.readFile('/Users/opreaghizelamaria/Desktop/tw/public/image.txt', 'utf8', function(err, contents) {
    console.log(contents);
});
 */
/*console.log('after calling readFile');
 

//5

app.get('/a',function(req,resp){
    request('https://jsonplaceholder.typicode.com/todos/',{json:true},(err,res,body)=>{
        if(err){return console.log('err');}
        console.log(body.url);
        console.log(body.explanation);
        resp.send(body);
    });});


//4

    app.get('/b',function(req,resp){
            fs.readFile('/Users/opreaghizelamaria/Desktop/tw/public/image.txt', 'utf8', function(err, contents) {
                console.log(contents);
                resp.send(contents);
        });});
        */