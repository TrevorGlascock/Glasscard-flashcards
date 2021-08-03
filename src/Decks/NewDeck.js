import React from "react";
import Breadcrumb from "../CommonComponents/Breadcrumb";
import FormTemplate from "../CommonComponents/Forms/FormTemplate";

function NewDeck() {
  return (
    <>
      <Breadcrumb navTitles={["Create Deck"]} />
      <FormTemplate objToModify={{}} objType="Deck" modifyType="Add" />
    </>
  );
}

export default NewDeck;
