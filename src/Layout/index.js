import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import HomePage from "../HomePage";
import Decks from "../Decks";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/decks/">
            <Decks />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </>
  );
}

export default Layout;
