import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import FormField from "./FormField";

function FormTemplate({ objToModify, objType, modifyType, deckName }) {
  const submitType = modifyType === "Add" ? "Save" : "Submit";
  const cancelType = modifyType === "Add" ? "Done" : "Cancel";
  const deckHeading = deckName ? `${deckName}: ` : null;

  const history = useHistory();
  const defaultFormState = { front: "", back: "" };
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
      `Front: ${formData.front}\n`,
      `Back: ${formData.back}`
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
          placeholder="What question will be asked?"
          value={formData.front}
          formChangeHandler={formChangeHandler}
        />
        <FormField
          inputType="textarea"
          name="back"
          placeholder="What is the answer to that question?"
          value={formData.back}
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
