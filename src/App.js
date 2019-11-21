import React from 'react';
import './App.css';
import TempView from './components/TempView/TempView';
import IntroName from './components/IntroName/IntroName';

function App() {
  return (
    <div className="App">
      {/* <IntroName /> */}
      <div className={`name`}></div>
      <TempView />
    </div>
  );
}

export default App;
