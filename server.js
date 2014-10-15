var express = require('express'),
    spawn = require('child_process').spawn;

var app = express();
var defaultHost = "http://www.ixigo.com";


var getHTMLSnapshot = function(url, callback) {
    if(!url) return "";

    var content = "";
    console.log(url);
    var phantom = spawn('phantomjs', ['snapshot_generator.js', url]);
    phantom.stdout.on('data', function(data) {
        content += data.toString();
    });
    phantom.on('exit', function(errorCode) {
        if(errorCode !== 0) {
            console.log(content);
            console.log("Error occured in generating snapshot : " + url);
        } else {
            callback(content);
        }
    })
}


app.get(/.*/, function(req, res){
    console.log("Incoming Request : " + req.url);
    var url = defaultHost + req.url;
    console.log("Getting Snapshot From : " + url);

    getHTMLSnapshot(url, function(content) {
        res.send(content);
    });
});
app.listen(7890);