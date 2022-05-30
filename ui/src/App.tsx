import React, { useRef, useEffect } from 'react';
import './App.css';
import Test from './pages/Test';
import './configs/antd/customized.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestProvider } from './context/test/TestContext';

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
          <Route
            path="test/*"
            element={
              <TestProvider>
                <Test />
              </TestProvider>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
