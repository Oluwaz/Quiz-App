import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import data from "../starter-code/data.json";
import "./Question.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Question() {
  const navigate = useNavigate();
  const location = useLocation();
  const { index } = location.state;

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerSelected, setAnswerSelected] = useState(null);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [scoreCount, setScoreCount] = useState(0);

  const assessmentObj = data["quizzes"][index];
  const question = assessmentObj["questions"][currentQuestion].question;
  const optionObj = assessmentObj["questions"][currentQuestion].options;
  const correctAnswer = assessmentObj["questions"][currentQuestion].answer;
  const optionLetter = ["A", "B", "C", "D"];

  const optionEventHandler = (optionIndex) => {
    setAnswerSelected(optionIndex);
  }

  const nextQuestion = () => {
    setAnswerSubmitted(false);
    setAnswerSelected(null);
    setIsCorrect(null);
    setCurrentQuestion(currentQuestion + 1);

    if(currentQuestion == 9) {
      navigate("/score", {state: {scoreCount}})
    }
  }

  const checkAnswer = (answerSelected) => {
    if(answerSelected != null) {
      if(optionObj[answerSelected] == correctAnswer) {
        setIsCorrect(answerSelected);
        setScoreCount(scoreCount + 1);
  
        setAnswerSubmitted(true);
      }
    } else {
      setAnswerSelected("nice try");
    }

  }


  return (
    <section>
      <Navbar />

      <div className="container">
        <div className="initial">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span> of 10
            <div className="question-text">
              {question ? <p>{question}</p> : null}
            </div>
          </div>
          <div className="progress-container">
            <div className="progress-bar">

            </div>
          </div>
        </div>

        <div className="answers-section">
          <ul>
            {optionObj.map((option, optionIndex) => (
              <li key={optionIndex} className={`${isCorrect == optionIndex ? "correct" : ""} ${answerSelected == optionIndex ? "selected" : ""} ${answerSubmitted && isCorrect != optionIndex && answerSelected == optionIndex ? "not_correct" : ""} ${answerSubmitted && correctAnswer == option && isCorrect !=optionIndex ? "rightChoice" : ""}`} onClick={() => !answerSubmitted ? optionEventHandler(optionIndex) : ""}> <div className="letter">{optionLetter[optionIndex]}</div><div className="word">{option}</div> </li>
            ))}
          </ul>
          {
            answerSubmitted ? 
            <button onClick={nextQuestion} id="nextQuestion">Next Question</button>
             :
            <button onClick={() => checkAnswer(answerSelected)} id="nextQuestion">Submit</button>
          }
        </div>

        {answerSelected == "nice try" ? alert("Pancakes") : ""}
      </div>
    </section>

  );
}
export default Question;