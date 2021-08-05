import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard, deleteDeck, listDecks } from "../../utils/api";

function DeleteButton({ objToDelete, objType, setDecks }) {
  const history = useHistory();
  //Event Handler to Delete specefied object
  function handleDelete() {
    if (
      window.confirm(
        `Delete this ${objType}?\n\nYou will not be able to recover it.`
      )
    ) {
      const controller = new AbortController(); //to abort old requests
      //Distinguish the type of delete
      objType === "deck"
        ? deleteDeck(objToDelete.id) //deleteDeck if it's a Deck
            .then(() => updateDecks(controller))
            .then(() => history.push(""))
        : deleteCard(objToDelete.id) //deleteCard if it's a Card
            .then(() => updateDecks(controller));
      //.then(() => history.push(""));
    }
    //if we cancel, then go home without deleting
    else history.push("");
  }

  function updateDecks({ signal }) {
    listDecks(signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
  }

  return (
    <button className="btn btn-danger mx-1" onClick={() => handleDelete()}>
      <span
        className="oi oi-trash pr-2"
        title="trash"
        aria-hidden="true"
      ></span>
      Delete
    </button>
  );
}

export default DeleteButton;
