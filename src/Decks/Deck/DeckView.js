import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import AddCardButton from "../../CommonComponents/Buttons/AddCardButton";
import DeleteButton from "../../CommonComponents/Buttons/DeleteButton";
import EditButton from "../../CommonComponents/Buttons/EditButton";
import StudyButton from "../../CommonComponents/Buttons/StudyButton";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import CardList from "./CardList";

function DeckView({ deck, setDeck }) {
  const { url } = useRouteMatch();
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(deck?.cards);
  }, [deck]);

  return deck?.name && cards ? (
    <>
      <Breadcrumb navTitles={[deck.name]} />
      <h2>{deck.name}</h2>
      <div>
        <EditButton path={url} />
        <StudyButton path={url} />
        <AddCardButton path={url} />
        <DeleteButton
          objToDelete={deck}
          objType={"deck"}
          setObjState={setDeck}
        />
      </div>
      <h2>Cards</h2>
      <CardList cards={cards} setCards={setCards} />
    </>
  ) : (
    <LoadingMessage />
  );
}

export default DeckView;
