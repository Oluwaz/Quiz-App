import React from "react";
import "./Score.css";




function Score() {

  return (
    <section className="outer">
      <div className="statement-div">
      <h2 >
        Quiz completed <br />
         <span className="h2">You scored...</span>
      </h2>
      </div>
      

      <div className="score-board">
        <div className="score-writing">
          <div className="pp">
            {}
            HTML
          </div>
          <p className="p1">
            9
          </p>
          <p className="p2">
            out of 10
          </p>
        </div>

        <button id="nextQuestion">Play Again</button>
      </div>
    </section>
  );
};

export default Score;
