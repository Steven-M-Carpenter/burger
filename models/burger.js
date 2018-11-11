//======================================================================
// Require the related orm
//======================================================================
var orm = require("../config/orm.js");

//======================================================================
//  Declare the orm functions and provide the query parameters to be used
//======================================================================
var burger = {
  selectAll: function (cb) {
    orm.selectAll("*", "burgers", function (res) {
      cb(res);
    });
  },
  insertOne: function (burgerName, cb) {
    orm.insertOne(burgerName, function (res) {
      cb(res);
    });
  },
  updateOne: function (burgerID, cb) {
    orm.updateOne(burgerID, function (res) {
      cb(res);
    });
  }
};

module.exports = burger;