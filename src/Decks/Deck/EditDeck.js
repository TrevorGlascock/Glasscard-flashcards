import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function EditDeck({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Edit Card"]} />
      <h1>Edit deck {deck.name}</h1>
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditDeck;
