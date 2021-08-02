import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function NewCard({ deck }) {
  return (
    <>
      <Breadcrumb />
      <h1>Creating a new card inside deck {deck.id}</h1>
    </>
  );
}

export default NewCard;
