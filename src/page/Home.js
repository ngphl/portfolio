import React from "react";
import { NavLink } from "react-router-dom";

/* Contact me Link */
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

function Home() {
  return (
    <div className="hero">
      {/* Welcome Section*/}
      <section id="welcome-section">
        <h1 className="welcome-font-header">Hey I'm Long</h1>
        <p className="welcome-font-p">Master student at QUT</p>
        <p className="welcome-font-p">welcome to my portfolio website</p>
        {/*Contact me section*/}
        <section>
          <div className="more-header">
            <p>Contact me</p>
          </div>
          <div className="more-link">
            {contactMe.map((contact) => (
              <a href={contact.url} className="more-detail">
                {contact.where}
              </a>
            ))}
          </div>
        </section>
        {/*End more section*/}
      </section>
    </div>
  );
}

export default Home;
