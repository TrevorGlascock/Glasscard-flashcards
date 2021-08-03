import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Breadcrumb from "../../../CommonComponents/Breadcrumb";
import LoadingMessage from "../../../CommonComponents/LoadingMessage";
function EditCard({ deck, cards }) {
  const { cardId } = useParams();
  const history = useHistory();
  const card = deck?.cards?.[cardId];

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
    setFormData(defaultFormState);
    history.push(""); //this needs to change to deckView
  };

  return deck?.id && cardId && cards ? (
    <>
      <Breadcrumb navTitles={[deck.name, `Edit Card ${cardId}`]} />
      <h1>Edit Card</h1>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <input
            className="form-control"
            id="front"
            name="front"
            placeholder="What question will be asked?"
            title="please fill out the front of the card."
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
            title="Please fill out the back of the card."
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
            Cancel
          </button>
          <button className="btn btn-primary mr-2" type="submit">
            Save
          </button>
        </div>
      </form>
    </>
  ) : (
    <LoadingMessage />
  );
}
export default EditCard;
