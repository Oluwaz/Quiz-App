import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from './components/welcomepage/welcome';
import Question from './components/Question';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/questions' element={<Question/>} />
        </Routes>
    );
};

export default App;