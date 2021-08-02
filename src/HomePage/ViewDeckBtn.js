import React from "react";
import { Link } from "react-router-dom";
function ViewDeckBtn({ path }) {
  return (
    <Link className="mx-1" to={path}>
      <button className="btn btn-secondary">
        <span className="oi oi-eye pr-2" title="eye" aria-hidden="true"></span>
        View
      </button>
    </Link>
  );
}

export default ViewDeckBtn;
