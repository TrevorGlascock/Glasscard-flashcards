import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CardList from "../CardList";
import StudyDeck from "./StudyDeck";
import EditDeck from "./EditDeck";
import Cards from "./Cards";

function Deck() {
  const {
    params: { deckId },
    path,
  } = useRouteMatch();
  return (
    <>
      <Switch>
        <Route path={`${path}/study`}>
          <StudyDeck />
        </Route>

        <Route path={`${path}/edit`}>
          <EditDeck />
        </Route>

        <Route path={`${path}/cards`}>
          <Cards />
        </Route>

        <Route exact path={path}>
          <CardList />
        </Route>

        <Route>
          <h1>Not a valid URL!</h1>
        </Route>
      </Switch>
    </>
  );
}
export default Deck;
