import React, { useRef, useEffect } from 'react';
import './App.css';
import Test from './pages/Test';
import './configs/antd/customized.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  // const handleSubmit = () => {
  //   if (htmlContentRef.current) {
  //     Array.from(htmlContentRef.current.getElementsByTagName('input')).forEach(
  //       (input) => {
  //         console.log(input.value);
  //       }
  //     );
  //   }
  // };

  return (
    <div className="h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="test/*" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
