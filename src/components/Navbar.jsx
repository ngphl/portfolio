import "../App.css";
import Link from "./Link";

function Navbar() {
  return (
    <header>
      <nav id="navbar">
        <div className="logo">
          {/* Top Left corner add Name Logo */}
          <h1 id="name">Phi Long Nguyen</h1>
        </div>
        <div className="link">
          <ul>
            <li>
              {/* Change the URL later*/}
              <Link name="About" url="https://www.google.com" />
            </li>
            <li>
              <Link name="Work" url="https://www.youtube.com" />
            </li>
            <li>
              <Link name="Contact" url="https://www.youtube.com" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
