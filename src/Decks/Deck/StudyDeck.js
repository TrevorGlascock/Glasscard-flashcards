import React from "react";
import { useRouteMatch } from "react-router-dom";
import Breadcrumb from "../../CommonComponents/Breadcrumb";

function StudyDeck({ deck }) {
  const { url } = useRouteMatch();
  let crumb = url.split("/");
  crumb = crumb.slice(0, crumb.length - 1).join("/");
  return (
    <>
      <Breadcrumb
        navPath={[
          {
            title: deck.name,
            destination: `${crumb}`,
          },
          "Study",
        ]}
      />
      <h1>Study deck {deck.id}</h1>
    </>
  );
}
export default StudyDeck;
