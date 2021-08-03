import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function StudyCard({ cards }) {
  const history = useHistory();
  const defaultStudyState = { index: 0, flipped: false, freshView: true };
  const [studyState, setStudyState] = useState(defaultStudyState);

  function flipHandler() {
    setStudyState({
      ...studyState,
      flipped: !studyState.flipped,
      freshView: false,
    });
  }
  function nextHandler() {
    if (studyState.index < cards.length - 1)
      setStudyState({
        index: studyState.index + 1,
        flipped: false,
        freshView: true,
      });
    else restartCards();
  }

  function restartCards() {
    if (
      window.confirm(
        `Restart cards?\n\n Click "cancel" to return to the home page`
      )
    )
      setStudyState(defaultStudyState);
    else history.push("");
  }

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">
          Card {studyState.index + 1} of {cards.length}
        </h2>
        <p className="card-text">
          {studyState.flipped
            ? cards[studyState.index].back
            : cards[studyState.index].front}
        </p>
        <button className="btn btn-secondary mr-2" onClick={flipHandler}>
          Flip
        </button>
        {studyState.freshView ? null : (
          <button className="btn btn-primary mr-2" onClick={nextHandler}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
export default StudyCard;
