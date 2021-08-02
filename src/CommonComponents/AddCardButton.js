import React from "react";
import { Link } from "react-router-dom";

function AddCardButton({ path }) {
  return (
    <>
      <Link className="mx-1" to={`${path}/new`}>
        <button className="btn btn-primary">
          <span class="oi oi-plus pr-2" title="plus" aria-hidden="true"></span>
          Add Cards
        </button>
      </Link>
    </>
  );
}

export default AddCardButton;
