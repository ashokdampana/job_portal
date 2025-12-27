import'./index.css'
import { useState } from "react"


function Login ({ setUser }) {

    console.log('Login page');
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleLogin = (e) => {
        e.preventDefault();
        console.log( email, password);
        const fakeUser = { name: "Ashok", role: "normal"};
        setUser( fakeUser );
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
        </div>
    )
}

export default Login;