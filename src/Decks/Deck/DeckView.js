import React from "react";
import { useRouteMatch } from "react-router-dom";
import AddCardButton from "../../CommonComponents/AddCardButton";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import DeleteButton from "../../CommonComponents/DeleteButton";
import EditButton from "../../CommonComponents/EditButton";
import StudyButton from "../../CommonComponents/StudyButton";
import CardList from "./CardList";

function DeckView({ deck, setCards }) {
  const { url } = useRouteMatch();
  return deck?.cards ? (
    <>
      <Breadcrumb navTitles={[deck.name]} />
      <h2>{deck.name}</h2>
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
