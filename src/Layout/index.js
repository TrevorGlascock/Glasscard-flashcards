import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Decks from "./Decks";
import NotFound from "./NotFound";
import HomePage from "./HomePage";

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
