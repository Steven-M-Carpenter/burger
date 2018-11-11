//======================================================================
// Define the connection to the database
//======================================================================
var mysql = require("mysql");
var connection;

//======================================================================
// Setup the connection details for local or deployed use
//======================================================================
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
  })
};

//======================================================================
// Initiate the connection and log any returns
//======================================================================
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;