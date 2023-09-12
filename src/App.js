import './App.css';
import SearchedQuestion from './components/SearchedQuestion';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import MainPage from './pages/MainPage';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path="searchedQuestion" element={<SearchedQuestion />} />
      </Routes>
    </Router>
  );
}

export default App




// 3. search params