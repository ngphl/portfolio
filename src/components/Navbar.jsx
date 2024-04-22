import "../App.css";


function Navbar() {
  const links = [
    { name: "About", url: "https://www.google.com" },
    { name: "Work", url: "https://www.youtube.com" },
    { name: "Contact", url: "https://www.youtube.com" },
  ];
  return (
    <header>
      <nav id="navbar">
        <div className="logo">
          {/* Top Left corner add Name Logo */}
          <h1 id="name">Phi Long Nguyen</h1>
        </div>
        <div className="link">
          <ul>
            {/* Map over the links array and render a Link component for each link */}
            {links.map((link, index) => (
              <li key={index}>
                {/* Render Link component with name and url from the current link object */}
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
