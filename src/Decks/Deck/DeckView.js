import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import AddCardButton from "../../CommonComponents/AddCardButton";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import DeleteButton from "../../CommonComponents/DeleteButton";
import EditButton from "../../CommonComponents/EditButton";
import StudyButton from "../../CommonComponents/StudyButton";
import CardList from "./CardList";

function DeckView({ deck, setCards }) {
  const {
    url,
    params: { deckId },
  } = useRouteMatch();
  // console.log(deck.cards);
  return deck?.cards ? (
    <>
      <Breadcrumb />
      <h3>{deckId}'s name goes here</h3>
      <div>
        <EditButton path={url} />
        <StudyButton path={url} />
        <AddCardButton path={url} />
        <DeleteButton objToDelete={deck} objType={"deck"} />
      </div>
      <h2>Cards</h2>
      <CardList cards={deck.cards} setCards={setCards} />
    </>
  ) : (
    <h1>Now Loading...</h1>
  );
}

export default DeckView;
