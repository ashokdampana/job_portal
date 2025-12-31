import './index.css';
import API from '../../services/api';
import { useState } from "react"


function Login () {

    console.log('Login page');
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const [ result, setResult ] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/api/auth/login', { email, password });
            setResult(res.data.message);
        } catch (error) {
            console.error("Login error:", error.response?.data || error.message); 
            setResult(error.response?.data?.message || "Login failed");
        } 
    }

    return (
        <div className="login-form">
            <form onSubmit={ handleLogin }>
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
                <button type="submit">Login</button>
            </form>
            { result && <p>{ result }</p> }
        </div>
    )
}

export default Login;