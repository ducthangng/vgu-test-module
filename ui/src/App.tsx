import React from 'react';
import './App.scss';
import Test from './pages/Test';
import Footer from './components/Footer';
import './configs/antd/customized.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestProvider } from './context/test/TestContext';
import MockTestSelection from './pages/MockTestSelection';

function App() {
  return (
    // <div>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route
    //         path="test/*"
    //         element={
    //           <TestProvider>
    //             <Test />
    //           </TestProvider>
    //         }
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <MockTestSelection />
  );
}

export default App;
