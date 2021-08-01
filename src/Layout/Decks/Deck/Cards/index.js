import React from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import EditCard from "./EditCard";

function Cards() {
  const { path } = useRouteMatch();
  const { deckId } = useParams();
  return (
    <>
      <Switch>
        <Route path={`${path}/new`}>
          <h1>Add Card to Deck {deckId}</h1>
        </Route>
        <Route path={`${path}/:cardId/edit`}>
          <EditCard />
        </Route>
        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Cards;
