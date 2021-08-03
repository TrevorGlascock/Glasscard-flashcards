import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            className="form-control"
            id="front"
            name="front"
            placeholder="What question will be asked?"
            title={`please fill out the front of the ${objType}.`}
            value={formData.front}
            onChange={formChangeHandler}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            className="form-control"
            id="back"
            name="back"
            placeholder="What is the answer to that question?"
            title={`Please fill out the back of the ${objType}.`}
            value={formData.back}
            onChange={formChangeHandler}
            required
          />
        </div>
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
