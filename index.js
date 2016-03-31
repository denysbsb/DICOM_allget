var port = 9000;

var express = require('express');
var _ = require("underscore");
var app = new express();

app.route('/api').get(function(req, res){
	res.status(200).send("this is API");
});

var myData = require('./dicom.json');

app.route('/api/dicom')
.get(function(req, res){
	res.status(200).json(myData);
});


app.get('/api/dicom/:id', function(req, res){
	var taskId = req.params.id;
	console.log(taskId);
	var users = myData;
	var filtered = _.where(users, {id: taskId});
	res.send(filtered);
});


app.listen(port, function(){
	console.log('listening on port' + 9000);
});