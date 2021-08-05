import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
import FormTemplate from "../../../CommonComponents/Forms/FormTemplate";
import LoadingMessage from "../../../CommonComponents/LoadingMessage";
function EditCard({ deck, setDecks }) {
  const { cardId } = useParams();
  const card = deck?.cards?.find((card) => card.id === Number(cardId));

  //TODO make api call to get the card from the database instead of using a passed down card
  return card ? (
    <>
      <Breadcrumb navTitles={[deck.name, `Edit Card ${card.id}`]} />
      <FormTemplate
        objToModify={card}
        objType="Card"
        modifyType="Edit"
        setDecks={setDecks}
      />
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditCard;
