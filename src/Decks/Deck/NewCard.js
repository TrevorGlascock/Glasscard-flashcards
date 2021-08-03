import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import FormTemplate from "../../CommonComponents/Forms/FormTemplate";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function NewCard({ deck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Add Card"]} />
      <FormTemplate
        objToModify={deck}
        objType="Card"
        modifyType="Add"
        deckName={deck.name}
      />
    </>
  ) : (
    <LoadingMessage />
  );
}

export default NewCard;
