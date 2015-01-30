// host mongo data on a nodejs server
// usage:
//       fpaul@fpaul:~/work# nodejs mongo.js
var     http    = require('http'),
        mongojs = require('mongojs');

var     uri     = "mongodb://localhost/mydb",
        db      = mongojs.connect(uri, ["mydata"]);

http.createServer(function (req,res){

        res.writeHead(200, {'Content-Type': 'text/html'}); 

        db.mydata.find({}, function (err, records){
                if(err) {
                console.log("ERROR!!!!!!!");
                response.end();
                return;
                }       

        var     html = '<h2> Names </h2>',
                i       = records.length;

        while(i--){
                html    +=  '<p><b> Name: </b></p>'
                        + records [i].x
        }

        res.write(html);
        res.end();
        })
}).listen(8888, "127.0.0.1");

console.log('Server running at http://localhost:8888');
