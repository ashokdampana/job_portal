// import './index.css'
import {  useState } from "react"
import API from '../api/api.js';

function Register () {

    console.log('Register page')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ role, setRole ] = useState('')
    const [ result, setResult ] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try { 
            const res = await API.post('/api/auth/register', { name, email, password }) 
            setResult(res.data.message || "Registration successful!") 
        } catch (error) { 
            setResult(error.response?.data?.message || "Registration failed") 
        }
    }

    return (
        <div className="register-form">
            <form onSubmit={ handleRegister }>
                <input 
                    placeholder="Username"
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                />
                <input 
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input 
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <select 
                    value={role}
                    onChange={e => setRole(e.target.value)}
                    required
                >
                    <option value="">Select Role</option>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button type="submit">Register</button>
            </form>
            { result && <p>{ result }</p> }
        </div>
    )
}

export default Register;