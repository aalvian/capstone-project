const BASE_URL = 'https://capstone-project-production-af1e.up.railway.app';

// == Register == //
export const register = async ({ username, email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, password }),
    });

    const data = await response.json();

    return {
      ok: response.ok,
      status: response.status,
      ...data,
    };
  } catch (error) {
    return {
      ok: false,
      message: 'Gagal terhubung ke server',
    };
  }
};

// == Login == //
export async function login({ email, password }) {
  try {
    const response = await fetch(`${BASE_URL}/api/login`, {
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
