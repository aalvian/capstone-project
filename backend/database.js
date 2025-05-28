const mysql = require('mysql');

const db = mysql.createConnection({
  host: "sql12.freesqldatabase.com",
  user: "sql12781669",
  password: "UxzmHFT5dD",
  database: "sql12781669",
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected!');
});

module.exports = db;
