import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../../CommonComponents/LoadingMessage";
function EditCard({ deck, cards }) {
  const { cardId } = useParams();

  if (deck?.id && cardId && cards) {
    const card = deck.cards[cardId];

    return (
      <>
        <Breadcrumb navTitles={[deck.name, `Edit Card ${cardId}`]} />
        <h1>
          Editing card {card.id} from {deck.name}
        </h1>
      </>
    );
  }

  return <LoadingMessage />;
}
export default EditCard;
