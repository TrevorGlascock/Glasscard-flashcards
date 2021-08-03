import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import DeckList from "./DeckList";

function HomePage() {
  //decks is a state variable array of each deck in the API
  const [decks, setDecks] = useState([]);

  //Loads the list of Decks from the API on startup
  useEffect(() => {
    const controller = new AbortController(); //to abort old requests

    //API call to {API_BASE_URL}/decks?_embed=cards (All cards embedded in the deck)
    listDecks(controller.signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }, []);

  return <DeckList decks={decks} setDecks={setDecks} />;
}

export default HomePage;
