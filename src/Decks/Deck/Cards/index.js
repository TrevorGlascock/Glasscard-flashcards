import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import EditCard from "./EditCard";

function Cards({ deck }) {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/new`}>
          <h1>Add Card to Deck {deck.id}</h1>
        </Route>
        <Route path={`${path}/:cardId/edit`}>
          <EditCard deck={deck} cards={deck.cards} />
        </Route>
        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Cards;
