import LoginPresenter from './login-presenter';

export default class LoginPage {
  constructor() {
    this._showError = this.showError.bind(this);
    this.presenter = new LoginPresenter({
      view: this
    });
  }

  async render() {
    return `
    <section class="form-login">
    
    <div class="container">
    <div id="loginError" class="error-message" style="display: none;"></div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
              <div class="card login-card bg-white border-0 p-4 mx-auto w-100">
                <div class="card-body">
                  <div class="text-center mb-3">
                    <img src="favicon.png" alt="Logo" class="logo-img mb-2" />
                  </div>
                  <h2 class="fw-bold text-center mb-2 fs-2">Login</h2>
                  <p class="text-center mb-4 login-subtitle">
                    Do you already have an account?
                    <a href="#/register" class="signup-link fw-medium">Sign up</a>
                  </p>
                  <form id="login-form" class="form" method="POST" autocomplete="off">
                    <div class="mb-3">
                      <label for="email" class="form-label fw-medium">
                        Email  <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Enter your email"
                        required
                        autocomplete="email"
                      />
                    </div>
                    <div class="mb-3">
                      <label for="password" class="form-label fw-medium">
                        Password <span class="text-danger">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        class="form-control"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="rememberMe" />
                        <label class="form-check-label" for="rememberMe">
                          Remember me
                        </label>
                      </div>
                      <a href="#" class="forgot-password-link">Forgot password</a>
                    </div>
                   <button type="submit" class="btn btn-primary w-100 login-btn fw-bold py-2 rounded-2 border-0">
                    Submit
                  </button>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  async afterRender() {
    const form = document.getElementById('login-form');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;

      await this.presenter.handleLogin({ email, password });
    });
  }

  showError(message) {
    const errorElement = document.getElementById('loginError');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
      setTimeout(() => {
        errorElement.style.display = 'none';
      }, 5000);
    }
  }
}
