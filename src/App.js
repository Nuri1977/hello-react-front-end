import React from "react"
import { Routes, Route } from 'react-router-dom';
import Greetings from './components/Greetings';

const App = () => {
    return (
          <Routes>
            <Route path="/" element={<h1>Hello Nuri</h1>} />
            <Route path="/greetings" element={<Greetings />} />
          </Routes>
    );
}

export default App
