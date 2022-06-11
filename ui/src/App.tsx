import React from 'react';
import './App.scss';
import Footer from './components/Footer';
import './configs/antd/customized.css';
import { DndContext } from '@dnd-kit/core';

import AppRoute from './routes/routes';

function App() {
  return <AppRoute />;
  // return (
  //   <DndContext>
  //     <Footer />
  //   </DndContext>
  // )
}

export default App;
