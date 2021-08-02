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
  }
  return (
    <button className="btn btn-danger " onClick={() => handleDelete()}>
      <span class="oi oi-trash pr-2" title="trash" aria-hidden="true"></span>
      Delete
    </button>
  );
}

export default DeleteButton;
