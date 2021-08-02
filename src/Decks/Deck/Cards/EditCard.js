import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
function EditCard() {
  const { deckId, cardId } = useParams();
  const { path } = useRouteMatch();
  console.log(path);
  return (
    <>
      <Breadcrumb />
      <h1>
        Edit card {cardId} from deck {deckId}
      </h1>
    </>
  );
}
export default EditCard;
