import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card({key,name,url,description,languages}) {
  return (
    <div className="box blue">
      <h2>{name}</h2>
      <p>{description}</p>
      <h3 className="lang">Tools - {languages}</h3>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline-primary github"
        >
          Github
        </a>
        <button
          type="button"
          className="btn btn-outline-primary btn-more-detail"
        >
          More detail
        </button>
      </div>
    </div>
  );
}

export default Card;
