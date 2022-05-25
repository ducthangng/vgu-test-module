import React, { useRef, useEffect } from 'react';
import './App.css';
import TestLayout from './pages/Test';
import './configs/antd/customized.css';

function App() {
  const htmlContentRef = useRef<HTMLDivElement>(null);
  const content = `<form>
    Who are <input type="text" class="border"/>? 
    My name is <input type="text" class="border"/>
  </form>`;

  const handleSubmit = () => {
    if (htmlContentRef.current) {
      Array.from(htmlContentRef.current.getElementsByTagName('input')).forEach(
        (input) => {
          console.log(input.value);
        }
      );
    }
  };

  return (
    <div className="App">
      <div ref={htmlContentRef} dangerouslySetInnerHTML={{ __html: content }} />
      <button onClick={handleSubmit}>Submit</button>
      <TestLayout />
    </div>
  );
}

export default App;
