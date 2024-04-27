import React from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Project() {
  const location = useLocation();
  const { repo } = location.state.repo;

  return (
    <div className="more-detail-project">
      <h1>{repo.name} Detail</h1>
      <ul className="list-group">
        <li className="list-group-item">ID: {repo.id}</li>
        <li className="list-group-item">Name: {repo.name}</li>
        <li className="list-group-item">
          HTML URL: <a href={repo.html_url}>{repo.html_url}</a>
        </li>
        <li className="list-group-item">Created: {repo.created_at}</li>
        <li className="list-group-item">Last Updated: {repo.updated_at}</li>
        <li className="list-group-item">Description: {repo.description}</li>
        <li className="list-group-item">Language: {repo.language}</li>
        <li className="list-group-item">Size: {repo.size} KB</li>
        <li className="list-group-item">Forks: {repo.forks}</li>
        <li className="list-group-item">Visibility: {repo.visibility}</li>
        <li className="list-group-item">
          License:{" "}
          {repo.license
            ? typeof repo.license === "object"
              ? repo.license.name
              : repo.license
            : "None"}
        </li>
        <li className="list-group-item">
          Default Branch: {repo.default_branch}
        </li>
      </ul>
    </div>
  );
}

export default Project;
