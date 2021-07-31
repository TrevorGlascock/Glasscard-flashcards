import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Deck from "./Deck";

function Decks() {
  const { url } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${url}/new`}>
          <h1>Create a new deck</h1>
        </Route>
        <Route path={`${url}/:deckId`}>
          <Deck />
        </Route>
        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}

export default Decks;
