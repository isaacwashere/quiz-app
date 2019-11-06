import React from "react";

const Result = ({score, playAgain, numQuestions}) => (
  <div className="score-board">
    <div className="score">You scored {score}/{numQuestions} correct answers!</div>
    <button className="playBtn" onClick={playAgain}>
      Play again!
    </button>
  </div>
);

export default Result;
