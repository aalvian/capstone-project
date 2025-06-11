// const mysql = require('mysql');

// // Konfigurasi koneksi
// const db = mysql.createConnection({
//   // host: 'localhost',
//   // port: 3306,
//   // user: 'root',
//   // password: '',
//   // database: 'db_pilihptn',

//   host: 'sql12.freesqldatabase.com',
//   user: 'sql12783293',
//   password: 'RbQJQr4u7b',
//   database: 'sql12783293',
// });

// // Koneksi ke database
// db.connect((err) => {
//   if (err) {
//     console.error('Koneksi database gagal: ' + err.stack);
//     return;
//   }
//   console.log('Terhubung ke database dengan ID: ' + db.threadId);
// });

// module.exports = db;

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://uguranqlwddqpxlbqdks.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVndXJhbnFsd2RkcXB4bGJxZGtzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk1NDA5NTQsImV4cCI6MjA2NTExNjk1NH0.T-AJlcQgbNM3K-L921zAkVbbTKMviUi3_WBg6BuBwUA';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;
