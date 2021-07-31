import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./Header";
import Decks from "./Decks";
import NotFound from "./NotFound";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
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
