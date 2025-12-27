import './index.css'
import { useState } from "react"

function Register () {

    console.log('Register page')
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleRegister = (e) => {
        e.preventDefault();
        console.log(name, email, password);
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
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register;