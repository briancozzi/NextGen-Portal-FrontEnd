// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
}

export default App;
