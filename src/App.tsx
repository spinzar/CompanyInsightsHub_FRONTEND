import React, { ChangeEvent, SyntheticEvent, useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Outlet } from 'react-router';


function App() {
  

  return (
    <>
      <Navbar />
      <Outlet /> 
    </>
  );
}

export default App;
