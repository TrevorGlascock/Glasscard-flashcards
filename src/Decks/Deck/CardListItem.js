import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import DeleteButton from "../../CommonComponents/DeleteButton";
import EditButton from "../../CommonComponents/EditButton";

function CardListItem({ card }) {
  const { url } = useRouteMatch();
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        <EditButton path={`${url}/cards/${card.id}`} />
        <DeleteButton objToDelete={card} objType={"card"} />
      </div>
    </div>
  );
}

export default CardListItem;
