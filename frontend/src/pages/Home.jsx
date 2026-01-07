import { useEffect } from "react";
import { useState } from "react";

function Home () {
    console.log('Home page');

    const [ message, setMessage] = useState('');

    useEffect(() => {
    const fetchMessage = async () => {
        try {
            const res = await fetch('http://localhost:5000/');
            const data = await res.json();
            setMessage(data.message);
        } catch (error) {
            setMessage('Error fetching message ', error.message);
        }
    }
    fetchMessage();
    }, []);

    return (
        <div>
            <h1>Home page</h1>
            { message && <p>{ message  }</p> }
        </div>
    )
}

export default Home