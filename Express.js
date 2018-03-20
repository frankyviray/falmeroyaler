var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT ||3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var reservation = [
{
    name: "harry",
    phoneNumber: "23434598",
    email:"asdfjkl@yahoo.com",
    uniquieId: "johnny Tsunami"
},
];

var waitList = [];

app.use('/', express.static('assets'));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));

});
app.get("/table", function (req, res) {
    res.sendFile(path.join(__dirname, "table.html"));

});

app.listen(PORT, function(){
    console.log("APP Listening on PORT" + PORT);
});

app.post("/api/new", function(req, res){
    
    var newReservation = req.body;
    console.log(newReservation);

    if (reservation.length <= 5 ){
        reservation.push(newReservation);
        console.log("reservation", reservation);

    }
    else {
        (waitList.push(newReservation));
        console.log("waitList",waitList);
    }
    res.end()
});