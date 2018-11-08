var connection = require("./connection.js");

var orm = {
  selectAll: function (theField, theTable, cb) {
    // console.log("orm selectAll method");   //remove
    var queryString = "SELECT ?? FROM ??";
    connection.query(queryString, [theField, theTable], function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      // console.log(result);  //remove
    });
  },
  insertOne: function (theBurger, cb) {
    console.log("theBurger = " + theBurger);
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
    // connection.query(queryString, [theBurger], function (err, result) {
    connection.query(queryString, [theBurger], function (err, result) {
      console.log("========================================");
      console.log("orm  queryString = " + queryString);
      console.log("========================================");
      if (err) {
        throw err;
      }
      cb(result);
      // console.log(result);  //remove
    });
  },
  updateOne: function (theID, cb) {
    console.log("========================================");
    console.log("orm.js theID = " + JSON.stringify(theID));
    console.log("========================================");

    var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ";
    queryString += theID.id;
    console.log("========================================");
    console.log("orm  queryString = " + queryString);
    console.log("========================================");

    // connection.query(queryString, [theID], function (err, result) {  // alternate syntax test
    connection.query(queryString, function (err, result) {
      if (err) {
        throw err;
      }
      cb(result);
      // console.log(result);  //remove
    });
  }
};

// console.log("========================================");
// console.log("orm.js theID = " + JSON.stringify(theID));
// console.log("========================================");
// var queryString = "UPDATE burgers SET devoured = true WHERE id = ?";
// // console.log(queryString);  //remove
// connection.query(queryString, [theID], function (err, result) {
//   if (err) {
//     console.log("orm  queryString = " + queryString);
//     throw err;
//   }
//   cb(result);
//   // console.log(result);  //remove
// }); 

module.exports = orm;