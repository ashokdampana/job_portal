
// import './index.css'
import { Link } from 'react-router-dom'

function Navbar () {
    console.log('Navbar');
    return (
        <nav className='navbar'>
            <div className='logo'>
                <Link to='/'>Ashok</Link>
            </div>
            <div className='links'>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
                <Link to="/post-job">Post Job</Link>
            </div>
        </nav>
    )
}

export default Navbar
