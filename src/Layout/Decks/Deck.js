import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function Deck() {
  const {
    params: { deckId },
    path,
  } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/study`}>
          <h1>Study deck {deckId}</h1>
        </Route>
        <Route path={`${path}/edit`}>
          <h1>Edit deck {deckId} </h1>
        </Route>
        <Route>
          {Number(deckId) ? (
            <h1>Viewing deck {deckId}</h1>
          ) : (
            <h1>Not a valid deck</h1>
          )}
        </Route>
      </Switch>
    </>
  );
}
export default Deck;
