#!/usr/bin/env node

var rest = require('restler');
var myUrl = "https://spark-public.s3.amazonaws.com/startup/code/bitstarter.html";

var callback = function(cont) { console.log(cont); };

rest.get(myUrl).on('complete', callback);
