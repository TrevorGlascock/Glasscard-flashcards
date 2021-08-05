import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import DeckView from "./DeckView";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import NewCard from "./Cards/NewCard";
import Cards from "./Cards";
import { readDeck } from "../../utils/api";

function Deck({ decks, setDecks }) {
  const {
    path, //Current URL Path
    params: { deckId }, //deckId taken from the path
  } = useRouteMatch();

  //deck is a state variable that stores the current deck Object
  const [deck, setDeck] = useState([]);

  //Loads the current Deck from the API on startup
  useEffect(() => {
    const controller = new AbortController(); //to abort old requests

    //API call to {API_BASE_URL}/decks/deckId/?_embed=cards (All cards embedded in the deck)
    async function loadDecks() {
      readDeck(deckId, controller.signal)
        .then(setDeck)
        .catch((error) => {
          if (error.name !== "AbortError") throw error;
        });
    }

    loadDecks();
    return () => controller.abort(); //cleanup
  }, []);

  /************************************    A more efficient useEffect that has fewer API calls      *************************************
   * 
  //Update deck whenever there is a change to the deckId in the url, or to the parent component's decks array
  useEffect(() => {
    setDeck(decks?.find((deck) => deck.id === Number(deckId))); //defines the current deck object based on the deckId param in the url
  }, [deckId, decks]);
******************************************************************************************************************************************/
  return (
    <>
      <Switch>
        <Route path={`${path}/study`}>
          <StudyDeck deck={deck} />
        </Route>

        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} setDecks={setDecks} />
        </Route>

        <Route path={`${path}/cards`}>
          <Cards deck={deck} setDecks={setDecks} />
        </Route>

        <Route exact path={path}>
          <DeckView deck={deck} setDecks={setDecks} />
        </Route>

        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Deck;
