import React from "react";
import LoadingMessage from "../CommonComponents/LoadingMessage";
import CreateDeckBtn from "./CreateDeckBtn";
import DeckList from "./DeckList";

function HomePage() {
  return (
    <>
      <CreateDeckBtn />
      <DeckList />
    </>
  );
}

export default HomePage;
