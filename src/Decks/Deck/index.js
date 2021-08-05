import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import NewCard from "./NewCard";
import Cards from "./Cards";

function Deck({ decks, setDecks }) {
  const {
    path, //Current URL Path
    params: { deckId }, //deckId taken from the path
  } = useRouteMatch();

  //deck is a state variable that stores the current deck Object
  const [deck, setDeck] = useState({});

  //Update deck whenever there is a change to the deckId in the url, or to the parent component's decks array
  useEffect(() => {
    setDeck(decks?.find((deck) => deck.id === Number(deckId))); //defines the current deck object based on the deckId param in the url
  }, [deckId, decks]);

  return (
    <>
      <Switch>
        <Route path={`${path}/study`}>
          <StudyDeck deck={deck} />
        </Route>

        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} setDecks={setDecks} />
        </Route>

        <Route path={`${path}/new`}>
          <NewCard deck={deck} setDecks={setDecks} />
        </Route>

        <Route path={`${path}/cards`}>
          <Cards deck={deck} setDecks={setDecks} />
        </Route>

        <Route exact path={path}>
          <DeckView deck={deck} setDeck={setDeck} />
        </Route>

        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Deck;
