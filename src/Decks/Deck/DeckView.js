import React from "react";
import { useRouteMatch } from "react-router-dom";
import AddCardButton from "../../CommonComponents/Buttons/AddCardButton";
import DeleteButton from "../../CommonComponents/Buttons/DeleteButton";
import EditButton from "../../CommonComponents/Buttons/EditButton";
import StudyButton from "../../CommonComponents/Buttons/StudyButton";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import CardList from "./CardList";

function DeckView({ deck }) {
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
      <CardList cards={deck.cards} />
    </>
  ) : (
    <LoadingMessage />
  );
}

export default DeckView;
