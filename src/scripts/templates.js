export function generateMainNavigationUnauthTemplate() {
  return `
    <li class="nav-item">
      <a class="nav-link" href="#dashboard">Dashboard</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#fitur">Fitur</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#kontak">Kontak</a>
    </li>
  `;
}

export function generateMainNavigationAuthTemplate() {
  return `
    <li class="nav-item">
      <a class="nav-link" href="#/rekomendasi">Rekomendasi</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/target-belajar">Jadwal</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#/pomodoro">Pomodoro</a>
    </li>
  `;
}

export function generateUnauthNavigationTemplate() {
  return `
    <li class="nav-item">
      <a class="btn btn-secondary me-2" href="#/login">Login</a>
      <a class="btn btn-secondary" href="#/register">Register</a>
    </li>
  `;
}

export function generateAuthNavigationTemplate() {
  return `
    <li class="nav-item">
      <a class="btn btn-danger" id="logout-button" href="#">Logout</a>
    </li>
  `;
}


