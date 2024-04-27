import "../App.css";
import { NavLink } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const activeStyle = {
  fontWeight: "bold",
};


function Navbar() {
  const links = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Resume", url: "/resume" },
    { name: "Portfolio", url: "/portfolio" },
  ];
  return (
    <header>
      <nav id="navbar">
        <div className="logo">
          {/* Top Left corner add Name Logo */}
          <img src={require("../assets/logo512.png")} className="logo-icon" />
          <h1 id="name">Phi Long Nguyen</h1>
        </div>
        <div className="navlink">
          <ul>
            {/* Map over the links array and render a Link component for each link */}
            {links.map((link, index) => (
              <li key={index}>
                {/* Render Link component with name and url from the current link object */}
                <NavLink
                  to={link.url}
                  style={({ isActive }) => (isActive ? activeStyle : null)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
