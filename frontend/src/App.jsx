
// import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import PostJob from './pages/Post_Job';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Jobs from './pages/Jobs';

function App() {

  return (
    <div className='app'>
      {/* <Navbar/> */}
      <Home />
      <Register />
      <Login />
      <PostJob />
      <Jobs />
    </div>
  )
}

export default App
