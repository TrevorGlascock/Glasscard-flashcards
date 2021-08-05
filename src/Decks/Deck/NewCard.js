import React from "react";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import FormTemplate from "../../CommonComponents/Forms/FormTemplate";
import LoadingMessage from "../../CommonComponents/LoadingMessage";

function NewCard({ deck, setDeck }) {
  return deck?.id ? (
    <>
      <Breadcrumb navTitles={[deck.name, "Add Card"]} />
      <FormTemplate
        objToModify={{}}
        objType="Card"
        modifyType="Add"
        deckName={deck.name}
        setObjState={setDeck}
      />
    </>
  ) : (
    <LoadingMessage />
  );
}

export default NewCard;
