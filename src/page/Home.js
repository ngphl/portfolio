import React from 'react'
import { NavLink } from "react-router-dom";

const links = [
  { name: "About", url: "/about" },
  { name: "Resume", url: "/resume" },
  { name: "Portfolio", url: "/portfolio" },
];

function Home() {
  return (
    <>
      {/* Welcome Section*/}
      <section id="welcome-section">
        <h1 className="welcome-font-header">Hey I'm Long</h1>
        <p className="welcome-font-p">Master student at QUT</p>
        <p className="welcome-font-p">welcome to my portfolio website</p>
        {/*More section*/}
        <section>
          <div class="more-header">
            <p>More information</p>
          </div>
          <div class="more-link">
            {links.map((link) => (
              <NavLink to={link.url} className="more-detail">
                {link.name}
              </NavLink>
            ))}
          </div>
        </section>
        {/*End more section*/}
      </section>
      {/* End Welcome Section*/}
    </>
  );
}

export default Home