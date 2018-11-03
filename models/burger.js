var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb) {
    orm.selectAll("*", "burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(burgerName, cb) {
    orm.insertOne("burgers", burgerName, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burgers", burgerID, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;
