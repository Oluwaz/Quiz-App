import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Welcome from './components/welcomepage/welcome';
import Question from './components/Question';
import Score from './components/Score';
import './App.css'

//so app.js needs it's css file and then in that css file, we write rules for each of the pages/components linked here. I think.... :)
//one sec
//in app.js we're going to use useeffect to monitor the state of the colorScheme and then.....you'll see
//need you to write the useeffect thingy again :)
//oooooh okay
const App = () => {
    useEffect(() => {
        const currentColorScheme = sessionStorage.getItem("colorScheme");
        
        //TODO: Kiss my ass!!
        if(currentColorScheme == "dark") {

        }
    }, [])
    
    
    
    
    return (
        <Routes>
            <Route path='/' element={<Welcome/>} />
            <Route path='/questions' element={<Question/>} />
            <Route path='/score' element={<Score/>} />
        </Routes>
    );
};

export default App;