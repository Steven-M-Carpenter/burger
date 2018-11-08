var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    // console.log("burger.js selectAll invoked");  //remove

    orm.selectAll("*", "burgers", function(res) {
      // console.log("in the selectAll function");  //remove
      cb(res);
    });
  },
  insertOne: function(burgerName, cb) {
    orm.insertOne(burgerName, function(res) {
      cb(res);
    });
  },

  updateOne: function(burgerID, cb) {
    console.log("burger.js ID = " + JSON.stringify(burgerID));
    orm.updateOne(burgerID, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;