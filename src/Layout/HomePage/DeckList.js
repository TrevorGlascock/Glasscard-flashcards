import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";
import DeckListItem from "./DeckListItem";

function DeckList() {
  //Decks is a state variable array of each deck in the API
  const [decks, setDecks] = useState([]);

  //map through every deck in decks to create a DeckListItem for each.
  const deckList = decks.map((deck, key) => (
    <DeckListItem key={key} deck={deck} setDecks={setDecks} />
  ));

  //useEffect to load the list of decks from the API on startup
  useEffect(() => {
    const controller = new AbortController(); //to abort old requests

    //Utility function that takes an AbortController signal and makes an API call to {API_BASE_URL}/decks?_embed=cards
    listDecks(controller.signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }, []);

  return <>{deckList}</>;
}

export default DeckList;
