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
      //Distinguish the type of delete
      objType === "deck"
        ? deleteDeck(objToDelete.id).then(updateDecks) //deleteDeck if it's a Deck
        : deleteCard(objToDelete.id).then(updateDecks); //deleteCard if it's a Card
    }
    //if we cancel, then go home without deleting
    else history.push("");
  }

  function updateDecks() {
    const controller = new AbortController(); //to abort old requests
    listDecks(controller.signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      });
    // .then(() => history.push(""));
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
