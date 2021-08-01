import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
function EditCard() {
  const { deckId, cardId } = useParams();
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <h1>
      Edit card {cardId} from deck {deckId}
    </h1>
  );
}
export default EditCard;
