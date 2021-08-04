import React from "react";
import { useRouteMatch } from "react-router-dom";
import DeleteButton from "../../CommonComponents/Buttons/DeleteButton";
import EditButton from "../../CommonComponents/Buttons/EditButton";

function CardListItem({ card, setCards }) {
  const { url } = useRouteMatch();
  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">{card.front}</p>
        <p className="card-text">{card.back}</p>
        <EditButton path={`${url}/cards/${card.id}`} />
        <DeleteButton
          objToDelete={card}
          objType={"card"}
          setObjState={setCards}
        />
      </div>
    </div>
  );
}

export default CardListItem;
