export default function Navigation() {
  return (
    <nav id="top-nav">
      <div className="nav-controls">
        <i className="bi bi-chevron-left"></i>
        <i className="bi bi-chevron-right"></i>
      </div>

      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <img src="/media/profile-picture.jpg" alt="profile" />
          <span className="text-truncate">Miss Beaver</span>
        </button>
        <ul
          className="dropdown-menu dropdown-menu-dark dropdown-menu-end"
          aria-labelledby="dropdownMenuButton">
          <li>
            <a className="dropdown-item" href="login.html">
              Account{" "}
              <span>
                <i className="bi bi-box-arrow-up-right"></i>
              </span>
            </a>
          </li>
          <li>
            <button className="dropdown-item" href="#">
              Profile
            </button>
          </li>
          <li>
            <a className="dropdown-item" href="finish.html">
              Log-out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
