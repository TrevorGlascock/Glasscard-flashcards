import React, { useState } from "react";

function StudyCard({ cards }) {
  const defaultStudyState = { index: 0, flipped: false };
  const [studyState, setStudyState] = useState(defaultStudyState);

  const flipHandler = () => {
    setStudyState({ ...studyState, flipped: !studyState.flipped });
  };
  const nextHandler = () => {};

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
        <button className="btn btn-primary mr-2" onClick={nextHandler}>
          Next
        </button>
      </div>
    </div>
  );
}
export default StudyCard;
