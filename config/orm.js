var connection = require("./connection.js");

var orm = {
  selectAll: function(theField, theTable) {
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [theField, theTable], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  insertOne: function(theTable, theBurger) {
    var queryString = "INSERT INTO ?? (burger_name, devoured) VALUES (??, false)";
    connection.query(queryString, [theTable, theBurger], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  },
  updateOne: function(theTable, theID) {
    var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";
    console.log(queryString);
    connection.query(queryString, [theTable, theID], function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  }
};

module.exports = orm;