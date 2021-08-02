import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function EditDeck({ deck }) {
  return (
    <>
      <Breadcrumb navTitles={[deck.name, "Edit Card"]} />
      <h1>Edit deck {deck.name}</h1>
    </>
  );
}
export default EditDeck;
