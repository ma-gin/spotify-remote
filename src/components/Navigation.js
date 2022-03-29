export default function Navigation() {
  return (
    <nav id="top-nav" className="flex">
      <div className="nav-controls">
        <i className="bi bi-chevron-left"></i>
        <i className="bi bi-chevron-right"></i>
      </div>
      <select name="nav-dropdown" id="nav-profile">
        <option selected>Log In</option>
        <option>Account</option>
        <option>Profile</option>
        <option>Upgrade to Premium</option>
        <option>Log Out</option>
      </select>
    </nav>
  )
}
