import React from "react";
import { useRouteMatch } from "react-router-dom";
import DeleteButton from "../../CommonComponents/Buttons/DeleteButton";
import EditButton from "../../CommonComponents/Buttons/EditButton";

//CardListItem is a template that makes an HTML Card with the correct data to be be displayed
function CardListItem({ card, setDecks }) {
  const { url } = useRouteMatch(); //Grab the url for the EditButton's path
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        <EditButton path={`${url}/cards/${card.id}`} />
        <DeleteButton objToDelete={card} objType={"card"} setDecks={setDecks} />
      </div>
    </div>
  );
}

export default CardListItem;
