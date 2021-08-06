import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import AddCardButton from "../../CommonComponents/Buttons/AddCardButton";
import DeleteButton from "../../CommonComponents/Buttons/DeleteButton";
import EditButton from "../../CommonComponents/Buttons/EditButton";
import StudyButton from "../../CommonComponents/Buttons/StudyButton";
import Breadcrumb from "../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../CommonComponents/LoadingMessage";
import CardList from "./CardList";

function DeckView({ deck, setDecks }) {
  const { url } = useRouteMatch(); //Grab the url for the for each button's path

  //cards is a state variable array of each card in the current deck
  const [cards, setCards] = useState([]);

  //Update cards array whenever there is a change to it's parent Component's deck Object
  useEffect(() => {
    setCards(deck?.cards);
  }, [deck]);

  return deck?.name && cards ? (
    <>
      <Breadcrumb navTitles={[deck.name]} />
      <div className="container">
        <div className="row">
          <h2>{deck.name}</h2>
        </div>

        <div className="row">
          <p className="">{deck.description}</p>
        </div>

        <div className="row justify-content-between mb-5">
          <div>
            <EditButton path={url} />
            <StudyButton path={url} />
            <AddCardButton />{" "}
          </div>
          <div>
            <DeleteButton
              objToDelete={deck}
              objType="deck"
              setDecks={setDecks}
            />
          </div>
        </div>

        <div className="row">
          <h2>Cards</h2>
        </div>

        <CardList cards={cards} setDecks={setDecks} />
      </div>
    </>
  ) : (
    <LoadingMessage />
  );
}

export default DeckView;
