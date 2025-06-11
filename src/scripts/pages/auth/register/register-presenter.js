import { register } from '../../../data/auth-api';

export default class RegisterPresenter {
  constructor({ showError }) {
    this._showError = showError;
  }

  async handleRegister({ username, email, password }) {
    try {
      if (password.length < 8) {
        throw new Error('Password minimal 8 karakter');
      }

      const response = await register({ username, email, password });

      if (!response.ok) {
        throw new Error(response.error || response.message || 'Registrasi gagal');
      }

      window.location.hash = '/login';
    } catch (error) {
      this._showError(error.message);
    }
  }
}
