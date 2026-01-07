// import './index.css';
import API from '../api/api';
import { useState } from "react"
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';


function Login () {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ result, setResult ] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await API.post('/api/auth/login', { email, password });
            console.log(res.data.message)
            login(res.data.token, res.data.role);
            navigate('/dashboard');

        } catch (error) {
            setResult(error.response?.data?.message);
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