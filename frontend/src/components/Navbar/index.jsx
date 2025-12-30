
import './index.css'
import { Link } from 'react-router-dom'

function Navbar () {
    console.log('Navbar');
    return (
        <nav className='navbar'>
            <h1>Brand</h1>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/post-job">Post Job</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar