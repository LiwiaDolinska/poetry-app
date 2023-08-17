import './App.css';
import RandomPoem from "./components/RandomPoem"
import SearchInput from './components/SearchInput';
import { BrowserRouter as Router, Route, Routes, useSearchParams } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [inputData, setInputData] = useState({})

  const handleInputData = (data) => {
    setInputData(data)
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<SearchInput onSubmit={handleInputData} />} />
        <Route path='/' element={<RandomPoem setData={inputData} />} />
        <Route path="searchedQuestion" element={<SearchedQuestion />} />
      </Routes>
    </>
  );
}

export default App
// 1. input do stanu
// 2. router
// 3. search params