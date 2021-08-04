import React from "react";

function DeleteButton({ objToDelete, objType }) {
  //Event Handler to Delete specefied object
  function handleDelete() {
    if (
      window.confirm(
        `Delete this ${objType}?\n\nYou will not be able to recover it.`
      )
    )
      console.log(`Attempting to delete: `, objToDelete);
      //make the delete request
      //make a get request
      //call setDecks passed in as a property setting to the new get call
      //history.push("")
  }
  return (
    <button className="btn btn-danger mx-1" onClick={() => handleDelete()}>
      <span className="oi oi-trash pr-2" title="trash" aria-hidden="true"></span>
      Delete
    </button>
  );
}

export default DeleteButton;
