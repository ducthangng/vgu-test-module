import React from 'react';
import './App.scss';
import Test from './pages/Test';
import './configs/antd/customized.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TestProvider } from './context/test/TestContext';
import UserManagement from './pages/UserManagement';

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
    //<Test />
    <UserManagement />
  );
}

export default App;
