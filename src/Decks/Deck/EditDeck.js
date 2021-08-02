import React from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function EditDeck() {
  const { deckId } = useParams();

  return (
    <>
      <Breadcrumb />
      <h1>Edit deck {deckId}</h1>
    </>
  );
}
export default EditDeck;
