import React from "react";
import { Link } from "react-router-dom";

function EditButton({ path }) {
  return (
    <>
      <Link className="mx-1" to={`${path}/edit`}>
        <button className="btn btn-secondary">
          <span
            className="oi oi-pencil pr-2"
            title="pencil"
            aria-hidden="true"
          ></span>
          Edit
        </button>
      </Link>
    </>
  );
}

export default EditButton;
