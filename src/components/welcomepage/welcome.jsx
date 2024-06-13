import React from 'react';
import { Link } from 'react-router-dom';
import Question from '../Question';
import htmlicon from '../../starter-code/assets/images/icon-html.svg';

const Welcome = () => {

    return (
        <div className='wel-div'>
            <h1 className='initial-h1'>Welcome to the Frontend Quiz App!</h1>
            <p className='initial-p'>Get ready to test your frontend knowledge.</p>
            <div>
                <Link to="/questions" state={{index: 0}}><img src={htmlicon} />Go to Question page (HTML)</Link> <br />
                <Link to="/questions" state={{index: 1}}>Go to Question page (!HTML)</Link>
            </div>
        </div>
    );
};

export default Welcome;