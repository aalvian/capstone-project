import { login } from '../../../data/auth-api';


class LoginPresenter {
  constructor({view}) {
    this._view = view;
  }

  async handleLogin({ email, password }) {
    if (password.length < 8) {
      this._view.showError('Password minimal 8 karakter');
      return;
    }

    try {

      const { error, loginResult } = await login({ email, password });
      console.log('Login Result:', loginResult);
      

      if (error) {
        this._view.showError('Email atau password salah');
        return;
      }
      
      localStorage.setItem('token', loginResult.user.token);
      window.dispatchEvent(
        new CustomEvent('auth-change', {
          detail: { isLoggedIn: true },
        }),
      );
      window.location.hash = '#/rekomendasi';
    } catch (error) {
      this._view.showError(error.message);
    }
  }
}

export default LoginPresenter;
