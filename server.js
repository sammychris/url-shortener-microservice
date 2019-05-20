'use strict';

var express = require('express');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var cors = require('cors');

var app = express();

// Basic Configuration 
var port = process.env.PORT || 3000;

/** this project needs a db !! **/ 
// mongoose.connect(process.env.MONGOLAB_URI);

app.use(cors());

/** this project needs to parse POST bodies **/
// you should mount the body-parser here

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

  
// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.post("/api/shorturl/new", function (req, res) {
  let url = req.body.url;
  dns.lookup(url.replace(/.+\//,''), function (err, addresses, family) {
    if(err) return res.json({"error":"invalid URL"});
    urlArr.push(url);
    res.json({"original_url": url,"short_url":urlArr.length});
  });
});

app.listen(port, function () {
  console.log('Node.js listening ...');
});
