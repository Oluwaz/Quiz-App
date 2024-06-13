import { useLocation } from "react-router-dom";
import data from '../starter-code/data.json';

function Question() {
    const location = useLocation();
    const {index} = location.state;

    const assessmentObj = data["quizzes"][index]
    const questionObj = assessmentObj["questions"]
    console.log(questionObj);

    return (
        <div>
            Look at me, I'm the questions
            {index == 0 ? <div>This is HTML questions</div> : null}
            <div>
                <div>Question</div>
                <div>Answers</div>
            </div>
        </div>
    )
}

export default Question;