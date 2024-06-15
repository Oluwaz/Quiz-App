import { useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../starter-code/data.json";
import "./Question.css";

function Question() {
  const location = useLocation();
  const { index } = location.state;

  const assessmentObj = data["quizzes"][index];
  const questionObj = assessmentObj["questions"];
  const answerOdj = assessmentObj["options"];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [showxt, setText] = useState(false);
  

  return (
    <div className="container">
      <div className="initial">
        <div className="question-count">
          <span>Question {currentQuestion + 1}</span> of {questionObj.length}
          <div className="question-text">
            {questionObj[currentQuestion].question}
          </div>
        </div>
        <div class="progress-container">
          <div class="progress-bar">
                ffffffffff
          </div>
        </div>
      </div>

        <div className="answers-section">
            <ul>
                <li>MOdem</li>
                <li>Lan</li>
                <li>Pasword</li>
                <li>sdddd</li>
            </ul>
            <button id="nextQuestion">Next Question</button>
        </div>
    </div>
  );
}

export default Question;