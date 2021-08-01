import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../../CommonComponents/DeleteButton";
import CardList from "./CardList";

function DeckView() {
  const { deckId } = useParams();
  return (
    <>
      <div>Breadcrumb goes here</div>
      <h3>{deckId}'s name goes here</h3>
      <div>
        <button>Edit</button>
        <button>Study</button>
        <button>Add Cards</button>
        <DeleteButton objToDelete={{}} objType={"deck"} />
      </div>
      <h2>Cards</h2>
      <CardList />
    </>
  );
}

export default DeckView;
