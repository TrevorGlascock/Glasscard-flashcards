import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../../CommonComponents/LoadingMessage";
function EditCard({ deck }) {
  const { cardId } = useParams();
  return deck?.id && cardId ? (
    <>
      <Breadcrumb navTitles={[deck.name, `Edit Card ${cardId}`]} />
      <h1>
        Editing card {cardId} from {deck.name}
      </h1>
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditCard;
