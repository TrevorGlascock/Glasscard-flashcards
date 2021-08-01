import React from "react";

function DeleteButton({ objToDelete, objType }) {
  //Event Handler to Delete specefied object
  function handleDelete() {
    if (
      window.confirm(
        `Are you sure you want to delete the "${objToDelete.name}" ${objType}?`
      )
    )
      console.log("Deleting this deck!");
  }
  return (
    <button className="btn btn-danger" onClick={() => handleDelete()}>
      Delete
    </button>
  );
}

export default DeleteButton;
