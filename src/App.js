import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getGreetings } from './redux/greetings';
import Greetings from './components/Greetings';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getGreetings()(dispatch);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<h1>Hello Nuri</h1>} />
      <Route path="/greetings" element={<Greetings />} />
    </Routes>
  );
};

export default App;
