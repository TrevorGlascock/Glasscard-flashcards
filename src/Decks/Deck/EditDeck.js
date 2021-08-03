import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import FormTemplate from "../../CommonComponents/Forms/FormTemplate";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function EditDeck({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Edit Deck"]} />
      <FormTemplate objToModify={deck} objType="Deck" modifyType="Edit" />
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditDeck;
