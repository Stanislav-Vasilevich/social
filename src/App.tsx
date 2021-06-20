import React from 'react';
import './App.css';
import Header from "./Header";
import FaceSection from "./FaceSection";

const App = () => {
  return (
    <div className="app">
      <div className="page">
        <Header/>
        <FaceSection/>
      </div>
    </div>
  );
}

export default App;
