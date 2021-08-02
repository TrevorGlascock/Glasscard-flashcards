import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function NewCard({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Add Card"]} />
      <h1>Creating a new card inside deck {deck.name}</h1>
    </>
  ) : (
    <LoadingMessage />
  );
}

export default NewCard;
