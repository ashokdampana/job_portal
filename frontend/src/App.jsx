
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Jobs from './pages/Jobs';

import Login from './pages/Login';
import PostJob from './pages/Post_Job';
import Register from './pages/Register';
import ProtectedRoute from './auth/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import AdminOnly from './auth/AdminOnly';

function App() {

  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path='/post-job' element={
          <AdminOnly>
            <PostJob />
          </AdminOnly>
        } />

      </Routes>
    </div>
  )
}

export default App
