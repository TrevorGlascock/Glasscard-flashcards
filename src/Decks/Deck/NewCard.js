import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function NewCard({ deck }) {
  return (
    <>
      <Breadcrumb navTitles={[deck.name, "Add Card"]} />
      <h1>Creating a new card inside deck {deck.name}</h1>
    </>
  );
}

export default NewCard;
