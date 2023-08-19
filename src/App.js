import './App.css';
import SearchedQuestion from './components/SearchedQuestion';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from 'react';
import MainPage from './pages/MainPage';

function App() {
  const [searchPhrase, setSearchPhrase] = useState({})

  const handleInputData = (data) => {
    setSearchPhrase(data)
  }


  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage onSubmit={handleInputData} />} />
        <Route path="searchedQuestion" element={<SearchedQuestion setData={searchPhrase} />} />
      </Routes>
    </Router>
  );
}

export default App



// 1. input do stanu
// 2. router
// 3. search params