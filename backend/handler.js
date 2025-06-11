const db = require('./database');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

const checkDatabaseHandler = async (request, h) => {
  try {
    const { data, error } = await db.from('user').select('*').limit(1);

    if (error) throw error;

    return { status: 'success', message: 'Database terhubung' };
  } catch (err) {
    console.error('Koneksi Gagal:', err);
    return h.response({ status: 'error', message: 'Database tidak terhubung' }).code(500);
  }
};

const registerUserHandler = async (request, h) => {
  const { username, email, password } = request.payload;

  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const token = crypto.randomBytes(32).toString('hex');

    const { data, error } = await db
      .from('user')
      .insert([
        {
          username,
          email,
          password: hashedPassword,
          token,
        },
      ])
      .select();

    if (error) throw error;

    return h
      .response({
        message: 'User registered successfully',
        user: data[0],
      })
      .code(201);
  } catch (err) {
    console.error(err);

    if (err.code === '23505' && err.detail.includes('already exists')) {
      return h.response({ error: 'Email sudah terdaftar' }).code(400);
    }

    return h.response({ error: 'Failed to register user' }).code(500);
  }
};

const loginUserHandler = async (request, h) => {
  const { email, password } = request.payload;

  try {
    const { data: users, error } = await db.from('user').select('*').eq('email', email).limit(1);

    if (error) throw error;

    if (users.length === 0) {
      return h.response({ error: 'Email tidak ditemukan' }).code(404);
    }

    const user = users[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return h.response({ error: 'Password salah' }).code(401);
    }

    return h
      .response({
        message: 'Login berhasil',
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
          token: user.token,
        },
      })
      .code(200);
  } catch (err) {
    console.error(err);
    return h.response({ error: 'Gagal mengambil data user' }).code(500);
  }
};

module.exports = {
  checkDatabaseHandler,
  registerUserHandler,
  loginUserHandler,
};
