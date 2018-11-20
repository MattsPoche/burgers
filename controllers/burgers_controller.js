const express = require("express");

let router = express.Router();

let burger = require("..models/burger.js");

router.get("/", function(req, res){
    var hbsObject = {
        burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
});


//export routes
module.exports = router;