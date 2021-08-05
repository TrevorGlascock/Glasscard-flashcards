import React, { useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import {
  createCard,
  createDeck,
  listDecks,
  updateCard,
  updateDeck,
} from "../../utils/api";
import FormField from "./FormField";

function FormTemplate({
  objToModify,
  objType,
  modifyType,
  deckName,
  setDecks,
}) {
  //For the event handlers to navigate
  const history = useHistory();
  const {
    url,
    params: { deckId },
  } = useRouteMatch();

  const deckViewURL = url.split("/").slice(0, 3).join("/");

  //Only add the Deck Name to the heading if the component is given a deckName prop
  const deckHeading = deckName ? `${deckName}: ` : null;

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
    const controller = new AbortController();
    objType === "Deck" ? editDeck(controller) : editCard(controller);
  };

  function editDeck({ signal }) {
    const newDeck = {
      ...objToModify,
      name: formData.name,
      description: formData.description,
    };
    updateDeck(newDeck, signal).then(() => updateDecks(signal));
  }
  function editCard({ signal }) {
    const newCard = {
      ...objToModify,
      front: formData.front,
      back: formData.back,
    };
    updateCard(newCard, signal).then(() => updateDecks(signal));
  }

  const addSubmitHandler = (event) => {
    event.preventDefault();
    const controller = new AbortController();
    objType === "Deck" ? addDeck(controller) : addCard(controller);
  };

  function addDeck({ signal }) {
    const newDeck = { name: formData.name, description: formData.description };
    createDeck(newDeck, signal).then(() => updateDecks(signal));
  }

  function addCard({ signal }) {
    const newCard = {
      front: formData.front,
      back: formData.back,
    };
    createCard(deckId, newCard, signal).then(() => updateDecks(signal));
  }

  function updateDecks(signal) {
    listDecks(signal)
      .then(setDecks)
      .catch((error) => {
        if (error.name !== "AbortError") throw error;
      })
      .then(() => {
        setFormData(defaultFormState);
        /**
         *      After Save/Submit
         * Adding new Deck goes to DeckView
         * Editing new Deck goes to DeckView
         *
         * Adding new card goes nowhere
         * Editing new card goes to DeckView
         */
        if (objType !== "Card" && modifyType !== "Add")
          history.push(deckViewURL);
      });
  }

  /**
   *        On Cancel/Done
   *
   * Adding new Deck goes Home
   *
   * Editing old Deck goes to DeckView
   * Adding new card goes to DeckView
   * Editing old card goes to DeckView
   */
  const cancelHandler = () => {
    setFormData(defaultFormState);
    if (objType === "Deck" && modifyType === "Add") history.push("");
    else history.push(deckViewURL);
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
