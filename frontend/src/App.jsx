
// import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Jobs from './pages/Jobs';

import Login from './pages/Login';
import PostJob from './pages/Post_Job';
import Register from './pages/Register';


function App() {

  return (
    <div className='app'>
      <Navbar/>
      <Home />
      <Jobs />
    </div>
  )
}

export default App
