
import './App.css';
import React from 'react';
import Questions from './components/question/Questions';
import { Routes, Route } from 'react-router-dom'
import ScoreBoard from './components/score/ScoreBoard';
function App() {
  return (
    <div className="App all_center coln_flex">
      <div className="spacer_01"></div>
      <div className="all_center coln_flex">
        <Routes>
          <Route path='/' element={<Questions />} />
          <Route path='/ScoreBoard' element={<ScoreBoard />} />
        </Routes>

      </div>
    </div>
  );
}

export default App;
