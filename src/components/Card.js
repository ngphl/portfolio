import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";

function Card({repo}) {
  return (
    <div className="box blue">
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <h3 className="lang">Tools - {repo.language}</h3>
      <div>
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary github"
        >
          Github
        </a>
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
