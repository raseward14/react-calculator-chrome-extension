import React from 'react';
import Layout from '../src/components/Layout';
import {
  Routes,
  Route
} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      Hello World
      <Routes>
      <Route path='/' element={<Layout />}></Route>
    </Routes>
    </div>
  );
}

export default App;
