import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
import FormTemplate from "../../../CommonComponents/Forms/FormTemplate";
import LoadingMessage from "../../../CommonComponents/LoadingMessage";
function EditCard({ deck, cards }) {
  const { cardId } = useParams();
  const card = deck?.cards?.[cardId];

  return deck?.id && cardId && cards ? (
    <>
      <Breadcrumb navTitles={[deck.name, `Edit Card ${cardId}`]} />
      <FormTemplate objToModify={card} objType="Card" modifyType="Edit" />
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditCard;
