import { useState } from "react";
import API from "../../services/api";


function Jobs () {
    const [ jobs, setJobs ] = useState([])

    const handleButton = async () => {
        const res = await API.get('/api/jobs')
        setJobs( res.data.message || [] );
    } 
    return (
        <div className="jobs">
            <ul>
                { jobs.map(job => <li>{ job }</li>) }
            </ul>
            <button onClick={handleButton}>Show jobs</button>
        </div>
    )
}

export default Jobs;