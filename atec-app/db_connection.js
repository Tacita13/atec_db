var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "pass",
  database: "aseguratec_db"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SHOW TABLES"; //INSERT INTO sellers
  con.query(sql, function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
