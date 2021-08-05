import React from "react";
import Breadcrumb from "../CommonComponents/Breadcrumb";
import FormTemplate from "../CommonComponents/Forms/FormTemplate";

function NewDeck({setDecks}) {
  return (
    <>
      <Breadcrumb navTitles={["Create Deck"]} />
      <FormTemplate
        objToModify={{}}
        objType="Deck"
        modifyType="Add"
        setDecks={setDecks}
      />
    </>
  );
}

export default NewDeck;
