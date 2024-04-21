import "../App.css";

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="logo">
          <h1 id="name">Phi Long Nguyen</h1>
        </div>
        <div className="link">
          <ul>
            <li>
              <a href="#welcome-section">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
