import React from "react";
import { Link } from "react-router-dom";
function CreateDeckBtn() {
  return (
    <Link className="mx-1" to="/decks/new">
      <button className="btn btn-secondary">
        <span
          className="oi oi-plus pr-2"
          title="plus"
          aria-hidden="true"
        ></span>
        Create Deck
      </button>
    </Link>
  );
}

export default CreateDeckBtn;