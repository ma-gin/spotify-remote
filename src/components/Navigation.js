export default function Navigation() {
  return (
    <div className="top-nav">
      <div id="top-nav" className="d-none d-sm-block">
        <nav className="navbar px-3 d-flex justify-content-between w-100">
          <ul className="nav">
            <li className="nav-item position-relative">
              <a className="nav-link position-relative" href="/album.html">
                <i className="bi bi-chevron-left"></i>
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-center position-relative"
                href="/artist.html">
                <i className="bi bi-chevron-right"></i>
              </a>
            </li>
          </ul>

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
        {/* <!-- good morning time js
            hover play button transition js,, gradient--> */}
      </div>
      <div className="nav-controls"></div>
    </div>
  )
}
