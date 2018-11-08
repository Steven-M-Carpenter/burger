var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

// Routes
//=============================================================================
router.get("/", function (req, res) {
  // console.log("running / default route");  //remove
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    //   console.log("displaying hbsObject below here");  //remove
    console.log(hbsObject);
    //   console.log("hbsObject should have been displayed above");  //remove
    res.render("index", hbsObject);  //fix
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne([req.body.name], function (result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function (req, res) {
  // var condition = req.params.id;
  // console.log("condition", condition);
  // console.log("================================================");
  // console.log("burgers_controller  req.params.id = " + req.params.id);
  // console.log("================================================");
  burger.updateOne(
    {
      id: req.params.id,
    },
    function (result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    });  //modified this to move function into the arguments
});

// Export routes for server.js to use.
module.exports = router;
