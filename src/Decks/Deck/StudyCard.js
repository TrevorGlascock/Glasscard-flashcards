import React, { useState } from "react";

function StudyCard() {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Card 1 of 3</h2>
        <p className="card-text">Card text goes here</p>
        <button className="btn btn-secondary mr-2">Flip</button>
        <button className="btn btn-primary mr-2">Next</button>
      </div>
    </div>
  );
}
export default StudyCard;
