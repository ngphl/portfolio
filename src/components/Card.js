import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Card() {
  return (
    <div className="box blue">
      <h2>Team Builder</h2>
      <p>
        Scans our talent network to create the optimal team for your project
      </p>
      <h2 className="lang">C#</h2>
      <div>
        <button type="button" className="btn btn-outline-primary github">
          Github
        </button>
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
