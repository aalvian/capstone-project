// const mysql = require('mysql2');
// require('dotenv').config();

// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
// });

// db.connect((err) => {
//   if (err) {
//     console.error('Koneksi database gagal: ' + err.stack);
//     return;
//   }
//   console.log('Terhubung ke database dengan ID: ' + db.threadId);
// });

// module.exports = db;


const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.getConnection()
  .then((connection) => {
    console.log('Terhubung ke database dengan ID: ' + connection.threadId);
    connection.release();
  })
  .catch((err) => {
    console.error('Koneksi database gagal: ' + err.stack);
  });   

module.exports = pool;
