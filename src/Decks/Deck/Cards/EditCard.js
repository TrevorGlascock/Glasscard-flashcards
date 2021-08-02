import React from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
function EditCard({ deck }) {
  const { cardId } = useParams();
  return (
    <>
      <Breadcrumb navTitles={[deck.name, `Edit Card ${cardId}`]} />
      <h1>
        Editing card {cardId} from {deck.name}
      </h1>
    </>
  );
}
export default EditCard;
