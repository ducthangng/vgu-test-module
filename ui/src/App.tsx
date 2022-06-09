import React from 'react';
import './App.scss';
import Test from './pages/Test';
import Footer from './components/Footer';
import './configs/antd/customized.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AppRoute from './routes/routes';

function App() {
  return <AppRoute />;
  // return <Footer />
}

export default App;
