const db = require('./database');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const checkDatabaseHandler = (request, h) => {
  return new Promise((resolve, reject) => {
    db.query('SELECT 1', (err, result) => {
      if (err) {
        console.error('Koneksi Gagal:', err);
        return reject(
          h.response({ status: 'error', message: 'Database tidak terhubung' }).code(500),
        );
      }
      resolve({ status: 'success', message: 'Database terhubung' });
    });
  });
};

const registerUserHandler = async (request, h) => {
  const { username, email, password } = request.payload;

  const hashedPassword = await bcrypt.hash(password, 10);
  const token = crypto.randomBytes(32).toString('hex');

  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO user (username, email, password, token) VALUES (?, ?, ?, ?)`;

    db.query(sql, [username, email, hashedPassword, token], (err, results) => {
      if (err) {
        console.error(err);
        return reject(h.response({ error: 'Failed to register user' }).code(500));
      }
      resolve(
        h.response({ message: 'User registered successfully', userId: results.insertId }).code(201),
      );
    });
  });
};

const loginUserHandler = async (request, h) => {
  const { email, password } = request.payload;

  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM user WHERE email = ?`;

    db.query(sql, [email], async (err, results) => {
      if (err) {
        console.error(err);
        return reject(h.response({ error: 'Gagal mengambil data user' }).code(500));
      }

      if (results.length === 0) {
        return reject(h.response({ error: 'Email tidak ditemukan' }).code(404));
      }

      const user = results[0];
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return reject(h.response({ error: 'Password salah' }).code(401));
      }

      resolve(
        h
          .response({
            message: 'Login berhasil',
            user: { id: user.id, username: user.username, email: user.email, token: user.token },
          })
          .code(200),
      );
    });
  });
};

module.exports = {
  checkDatabaseHandler,
  registerUserHandler,
  loginUserHandler,
};
