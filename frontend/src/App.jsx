
import { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Login from './pages/Login';
import PostJob from './pages/PostJob_Form';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'


function App() {

  const [ user, setUser ] = useState(null);
  return (
    <div className='app'>
      <Navbar user={user}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/register' element={<Register />} />
        { user?.role === "admin" && (
          <Route path='/post-job' element={<PostJob />} />
        )}
      </Routes>
    </div>
  )
}

export default App
