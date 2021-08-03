import React from "react";
import { useRouteMatch } from "react-router-dom";
import CreateDeckBtn from "../CommonComponents/Buttons/CreateDeckBtn";
import DeckList from "./DeckList";

function HomePage() {
  const { url } = useRouteMatch();
  return (
    <>
      <CreateDeckBtn />
      <DeckList />
    </>
  );
}

export default HomePage;
