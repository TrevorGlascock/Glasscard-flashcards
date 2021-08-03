import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormField from "./FormField";

function FormTemplate({ objToModify, objType, modifyType }) {
  //For the event handlers to navigate
  const history = useHistory();

  //Only add the Deck Name to the heading if we are adding a card
  const deckHeading =
    objType === "Card" && modifyType === "Add" ? `${objToModify.name}: ` : null;

  //"Done" when adding, but "Cancel" when editing
  const cancelType = modifyType === "Add" ? "Done" : "Cancel";
  //"Save" when adding, but "Submit" when editing
  const submitType = modifyType === "Add" ? "Save" : "Submit";

  //Deck and Card have unique placeholders for each form
  const firstPlaceholder =
    objType === "Deck" ? "Deck Name" : "Front side of card";
  const secondPlaceholder =
    objType === "Deck" ? "Brief description of the deck" : "Back side of card";

  //Default state is empty when adding, but is the current data when editing.
  const defaultFormState =
    modifyType === "Add"
      ? //When Adding...
        objType === "Deck"
        ? { name: "", description: "" } //Add Empty Deck for Deck
        : { front: "", back: "" } //Add Empty Card for Card
      : //When Editing...
      objType === "Deck"
      ? { name: objToModify.name, description: objToModify.description } //Deck name & Description for Deck
      : { front: objToModify.front, back: objToModify.back }; //Card front & back for Card

  const [formData, setFormData] = useState(defaultFormState);

  const formChangeHandler = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const editSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      `Change this ${objType} from\n`,
      objToModify,
      `\nto:\n`,
      objType === "Deck"
        ? {
            ...objToModify,
            name: formData.name,
            description: formData.description,
          }
        : { ...objToModify, front: formData.front, back: formData.back }
    );
    setFormData(defaultFormState);
    history.push(""); //This needs to change to deckView
  };

  const addSubmitHandler = (event) => {
    event.preventDefault();
    console.log(
      `Add the following new ${objType}:\n`,
      objType === "Deck"
        ? {
            ...objToModify,
            name: formData.name,
            description: formData.description,
          }
        : { ...objToModify, front: formData.front, back: formData.back }
    );
    setFormData(defaultFormState);
    history.push(""); //This needs to change to deckView
  };

  const cancelHandler = () => {
    console.log(objToModify);
    setFormData(defaultFormState);
    history.push(""); //this needs to change to deckView
  };

  return (
    <>
      <h1>
        {deckHeading}
        {modifyType} {objType}
      </h1>
      <form
        onSubmit={modifyType === "Add" ? addSubmitHandler : editSubmitHandler}
      >
        <FormField
          inputType={objType === "Deck" ? "text" : "textarea"}
          name={objType === "Deck" ? "name" : "front"}
          placeholder={firstPlaceholder}
          value={objType === "Deck" ? formData.name : formData.front}
          formChangeHandler={formChangeHandler}
        />
        <FormField
          inputType="textarea"
          name={objType === "Deck" ? "description" : "back"}
          placeholder={secondPlaceholder}
          value={objType === "Deck" ? formData.description : formData.back}
          formChangeHandler={formChangeHandler}
        />
        <div>
          <button
            className="btn btn-secondary mr-2"
            type="button"
            onClick={cancelHandler}
          >
            {cancelType}
          </button>
          <button className="btn btn-primary mr-2" type="submit">
            {submitType}
          </button>
        </div>
      </form>
    </>
  );
}
export default FormTemplate;
