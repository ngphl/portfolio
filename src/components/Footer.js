import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";

/* Array of contact item */
const contactMe = [
  {
    where: "Linkedin",
    url: "https://www.linkedin.com/in/long-nguyen-290702247/",
  },
  {
    where: "Github",
    url: "https://github.com/ngphl",
  },
  {
    where: "Email",
    url: "mailto:longsworkspace@gmail.com",
  },
];

function Footer() {
  return (
    <div className="footer-basic">
      <footer>
        <div className="footer-item">
          <ul className="list-inline">
            <li className="list-inline-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/resume">Resume</NavLink>
            </li>
            <li className="list-inline-item">
              <NavLink to="/portfolio">Porfolio</NavLink>
            </li>
          </ul>
        </div>
        <div>
          {/*Map out each contact item */}
          <ul className="list-inline">
            {contactMe.map((contact, key) => (
              <li className="list-inline-item" key={key}>
                <a href={contact.url}>{contact.where}</a>
              </li>
            ))}
          </ul>
        </div>
        <li className="list-inline-item">
          Copyright © 2024 Long Nguyen, Built with React.
        </li>
      </footer>
    </div>
  );
}

export default Footer;
