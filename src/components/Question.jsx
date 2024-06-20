import { useLocation } from "react-router-dom";
import { useState } from "react";
import data from "../starter-code/data.json";
import "./Question.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";


function Question() {
  const location = useLocation();
  const { index } = location.state;

  const assessmentObj = data["quizzes"][index];
  const questionObj = assessmentObj["questions"];
  const answerOdj = assessmentObj["options"];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <section>
       <Navbar/>

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
                
            </div>
        </div>
      </div>

        <div className="answers-section">
            <ul>
                <li> <div className="letter">A</div><div className="word">Home Tool Markup Language</div> </li>
                <li> <div className="letter">B</div><div className="word">Home Tool Markup Languages</div> </li>
                <li> <div className="letter">C</div><div className="word">Home Tool Markup Languages</div> </li>
                <li> <div className="letter">D</div><div className="word">Home Tool Markup Languages</div> </li>

                
            </ul>
            <button id="nextQuestion">Submit</button>
        </div>
    </div>
    </section>

  );
}
export default Question;