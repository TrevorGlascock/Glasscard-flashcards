import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../../CommonComponents/DeleteButton";
import CardList from "./CardList";

function DeckView({ deck, setCards }) {
  const { deckId } = useParams();
  // console.log(deck.cards);
  return deck?.cards ? (
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
      <CardList cards={deck.cards} setCards={setCards} />
    </>
  ) : (
    <h1>Now Loading...</h1>
  );
}

export default DeckView;
