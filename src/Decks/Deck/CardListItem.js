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
        <div className="container">
          <div className="row mb-4">
            <div className="col">
              <p className="card-text ">{card.front}</p>
            </div>

            <div className="col">
              <p className="card-text">{card.back}</p>
            </div>
          </div>
          <div className="row">
            <EditButton path={`${url}/cards/${card.id}`} />
            <DeleteButton
              objToDelete={card}
              objType="card"
              setDecks={setDecks}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardListItem;
