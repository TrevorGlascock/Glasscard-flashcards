import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import NewCard from "./NewCard";
import Cards from "./Cards";
import { readDeck } from "../../utils/api";

function Deck({ decks }) {
  const {
    path, //Current URL Path
    params: { deckId }, //deckId taken from the path
  } = useRouteMatch();

  //State variable for the current deck
  const [deck, setDeck] = useState(
    decks?.find((deck) => deck.id === Number(deckId))
  );

  useEffect(() => {
    setDeck(decks?.find((deck) => deck.id === Number(deckId)));
  }, [deckId, deck]);

  // //Loads the current deck from the API each time deckId changes
  // useEffect(() => {
  //   const controller = new AbortController();

  //   //API call to {API_BASE_URL}/decks/{deckId}?_embed=cards
  //   readDeck(deckId, controller.signal)
  //     .then(setDeck)
  //     .catch((error) => {
  //       if (error.name !== "AbortError") throw error;
  //     });
  // }, [deckId]);

  function setCards(setterFunction) {
    setDeck((currentDeck) => ({
      ...currentDeck,
      cards: setterFunction(currentDeck.cards),
    }));
  }

  return (
    <>
      <Switch>
        <Route path={`${path}/study`}>
          <StudyDeck deck={deck} />
        </Route>

        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} />
        </Route>

        <Route path={`${path}/new`}>
          <NewCard deck={deck} />
        </Route>

        <Route path={`${path}/cards`}>
          <Cards deck={deck} />
        </Route>

        <Route exact path={path}>
          <DeckView deck={deck} setCards={setCards} />
        </Route>

        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Deck;
