
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
      const fetchedData = async () => {
      try {
        const response = await fetch('http://localhost:5001/api/data'); 
        const data = await response.json(); 
        setData( data.message);
      } catch(error) {
        console.error('Error fetching data:', error) 
      }
    }
    fetchedData();
    console.log('Data from backend :', data)
  }, [data])

  return (
    <>
      <h1>Hello react !</h1>
      <p>Data from backend : {data}</p>
    </>
  )
}

export default App
