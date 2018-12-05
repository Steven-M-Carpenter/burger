//======================================================================
// Set up to begin handling supplied routes
//======================================================================
var express = require("express");
var router = express.Router();

//======================================================================
// Define the model file
//======================================================================
var burger = require("../models/burger.js");


//======================================================================
// Declare the routes to be serviced
//=============================================================================
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject); 
  });
});


router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.name], function (result) {
    //======================================================================
    // Send back the ID of the new burger
    //======================================================================
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function (req, res) {
  burger.updateOne(
    {
      id: req.params.id,
    },
    function (result) {
      if (result.changedRows === 0) {
        //======================================================================
        // If no rows were changed, then the ID must not exist, so 404
        //======================================================================
        return res.status(404).end();
      }
      res.status(200).end();
    });
});

//======================================================================
// Export routes for server.js to use.
//======================================================================
module.exports = router;
