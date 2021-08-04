import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import DeckList from "./DeckList";

function HomePage({decks, setDecks}) {


  return <DeckList decks={decks} setDecks={setDecks} />;
}

export default HomePage;
