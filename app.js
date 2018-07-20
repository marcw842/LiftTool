var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mysql = require("mysql");
app.use(bodyParser.urlencoded({extended: true }));



app.set("view engine", "ejs");

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'den1.mysql5.gear.host',
  user     : 'lifts',  //your username
  password : 'Nq68v9!2PT?p'  
  database : 'lifts'         //the name of your db
});

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
   if (error) throw error;
   console.log('The solution is: ', results[0].solution);
});



app.listen(process.env.PORT, process.env.IP, function(){
    
    console.log("Lift server running");
});

app.get("/hikrista", function(req,res){
    res.render("hikrista");
});


app.get("/", function(req,res){
    res.render("home");
});



// app.post("/", function(req,res){
//       var Lift = req.body.Lift;
//       var Weight = req.body.Weight;
//       var Sets = req.body.Sets;
//       var Reps = req.body.Reps;
//     res.redirect("/");
    
// });

app.post("/", function(req,res){
    var record = {
        Date: req.body.Date,
        Lift: req.body.Lift,
        Weight: req.body.Weight,
        Sets: req.body.Sets,
        Reps: req.body.Reps};
        
        connection.query('INSERT INTO lifts SET ?', record, function(err, results) {
   if (err) throw err;
   console.log(record);
        
    res.redirect("/");
    
    });  
});


