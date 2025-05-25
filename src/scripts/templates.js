export function generateMainNavigationListTeamplet() {
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

export function generateUnauthenticatedNavigationListTemplate() {
    return `
        <li class="nav-item">
            <a class="btn btn-secondary" href="#/login">Login</a>
            <a class="btn btn-secondary" href="#/register">Register</a>
        </li>
    `;
}


export function generateMainNavigationListNavTeamplet() {
    return `
        <li class="nav-item">
            <a class="nav-link" href="#/">Dashboard</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/">Recomendation PTN</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/">Target Belajar</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#/">Pomodoro Sistem</a>
        </li>
    `;
}

export function generateAuthenticatedNavigationListTemplate() {
    return `
    <li class="nav-item">
      <button id="logout-button" class="btn btn-danger">Logout</button>
    </li>
    `;
}