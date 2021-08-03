import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import EditCard from "./EditCard";

function Cards({ deck }) {
  const { path } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/:cardId/edit`}>
          <EditCard deck={deck} />
        </Route>
        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Cards;
