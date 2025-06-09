const mysql = require('mysql');

// Konfigurasi koneksi
const db = mysql.createConnection({
  // host: 'localhost',
  // port: 3306,
  // user: 'root',
  // password: '',
  // database: 'db_pilihptn',
  host: 'sql12.freesqldatabase.com',
  user: 'sql12783174',
  password: 'k4ZXltL7i6',
  database: 'sql12783174',
});

// Koneksi ke database
db.connect((err) => {
  if (err) {
    console.error('Koneksi database gagal: ' + err.stack);
    return;
  }
  console.log('Terhubung ke database dengan ID: ' + db.threadId);
});

module.exports = db;
