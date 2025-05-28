// == Register == //
export async function register({ username, email, password }) {
  const response = await fetch('http://localhost:3000/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, email, password }),
  });
  console.log('Berhasil register', response);

  const responseJson = await response.json();
  return { ...responseJson, ok: response.ok };
}

// == Login == //
export async function login({ email, password }) {
  try {
    const response = await fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    console.log('Login response:', data);

    if (!data) {
      return {
        error: true,
        message: data.message || 'Login gagal',
      };
    }

    return {
      error: false,
      loginResult: data,
    };
  } catch (error) {
    return {
      error: true,
      message: 'Terjadi kesalahan jaringan',
    };
  }
}