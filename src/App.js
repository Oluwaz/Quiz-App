import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from './components/welcomepage/welcome';
import Question from './components/Question';
import Score from './components/Score';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/questions' element={<Question/>} />
            <Route path='/score' element={<Score/>} />


        </Routes>
    );
};

export default App;