import React from "react";
import { Link } from "react-router-dom";

function StudyButton({ path }) {
  return (
    <>
      <Link className="mx-1" to={`${path}/study`}>
        <button className="btn btn-primary">
          <span
            className="oi oi-book pr-2"
            title="book"
            aria-hidden="true"
          ></span>
          Study
        </button>
      </Link>
    </>
  );
}

export default StudyButton;
