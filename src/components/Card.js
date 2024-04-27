import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

/* Get the Repo and its information */
function Card({ repo }) {
  return (
    <div className="box blue">
      {/* Repo Name & description & Language */}
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <h3 className="lang">Tools - {repo.language}</h3>
      <div>
        {/* Link toward the Github repo */}
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary github"
        >
          Github
        </a>
        {/* Button to Lead to Project page with passed Repo State */}
        <NavLink
          to="/project"
          state={{
            repo: { repo },
          }}
        >
          <button
            type="button"
            className="btn btn-outline-primary btn-more-detail"
          >
            More detail
          </button>
        </NavLink>
      </div>
    </div>
  );
}

export default Card;
