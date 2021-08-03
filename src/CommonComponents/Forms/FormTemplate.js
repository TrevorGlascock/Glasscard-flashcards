import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormField from "./FormField";

function FormTemplate({ objToModify, objType, modifyType }) {
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

  const history = useHistory();
  const defaultFormState = { firstField: "", secondField: "" };
  const [formData, setFormData] = useState(defaultFormState);

  const formChangeHandler = ({ target: { name, value } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(
      "API Call goes here!\nfor now here's the data:\n",
      `Front: ${formData.firstField}\n`,
      `Back: ${formData.secondField}`
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
      <form onSubmit={submitHandler}>
        <FormField
          inputType={objType === "Deck" ? "text" : "textarea"}
          name="front"
          placeholder={firstPlaceholder}
          value={formData.firstField}
          formChangeHandler={formChangeHandler}
        />
        <FormField
          inputType="textarea"
          name="back"
          placeholder={secondPlaceholder}
          value={formData.secondField}
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
