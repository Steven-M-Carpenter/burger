//======================================================================
// Require the connection to the database
//======================================================================
var connection = require("./connection.js");


//======================================================================
// Build the various query functions allowing for value substitution
//======================================================================
var orm = {
  selectAll: function (theField, theTable, cb) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [theField, theTable], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function (theBurger, cb) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
    connection.query(queryString, [theBurger], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  updateOne: function (theID, cb) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
    queryString += theID.id;
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;