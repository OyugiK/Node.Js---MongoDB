// Sample script of Node.js with MongoDB Connection 

// This code requires mongoose node module
var mongoose = require('mongoose');

// Connecting local mongodb database named test
var db = mongoose.connect('mongodb://127.0.0.1:27017/test');

// testing connectivity
mongoose.connection.once('connected', function() {
	console.log("Database connected successfully")
});
