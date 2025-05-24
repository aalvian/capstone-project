import RegisterPresenter from './register-presenter';

export default class RegisterPage {
  constructor() {
    this._showError = this.showError.bind(this);
    this.presenter = new RegisterPresenter({
      showError: this._showError,
    });
  }

  async render() {
    return `
      <section class="form-login">
        <div id="registerError" class="error-message d-none"></div>

        <div class="container m-4 p-4">
          <div class="row justify-content-center">
            <div class="col-12 col-md-8 col-lg-6">
              <div class="card login-card bg-white border-0 p-4 mx-auto w-100">
                <div class="card-body">
                  <div class="text-center mb-3">
                    <img src="favicon.png" alt="Logo" class="logo-img mb-2" />
                  </div>
                  <h2 class="fw-bold text-center mb-2 fs-2">Register</h2>
                  <p class="text-center mb-4 login-subtitle">
                    Already have an account?
                    <a href="#/login" class="signup-link fw-medium">Sign in</a>
                  </p>
                  <form id="register-form" class="form" method="POST" autocomplete="off">
                    <div class="mb-3">
                      <label for="username" class="form-label fw-medium">
                        Username <span class="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        class="form-control"
                        placeholder="Enter your username"
                        required
                      />
                    </div>
                    <div class="mb-3">
                      <label for="email" class="form-label fw-medium">
                        Email <span class="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        class="form-control"
                        placeholder="Enter your email"
                        required
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
                    
                    <button
                      type="submit"
                      class="btn btn-primary w-100 login-btn fw-bold py-2 rounded-2 border-0">Submit
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
    const form = document.getElementById('register-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      };
      this.presenter.handleRegister(data);
    });
  }

  showError(message) {
    const errorElement = document.getElementById('registerError');
    errorElement.textContent = message;
    errorElement.style.display = 'block';
    setTimeout(() => {
      errorElement.style.display = 'none';
    }, 5000);
  }
}
