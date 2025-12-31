import { useState } from "react";
import API from "../../services/api";
import { useEffect } from "react";


function Jobs () {
    console.log('Jobs page')
    const [ jobs, setJobs ] = useState([])

    useEffect( () => {
        API.get('/api/jobs')
            .then( res => setJobs( res.data.message || [] ))
            .catch( err => console.log( err ));
    }, [])

    const handleDelete = async (_id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this job?"); 
        if (!confirmDelete) return;
        
        setJobs(jobs.filter(job => job._id !== _id) )
        try {
            await API.delete(`/api/jobs/${_id}`);
            
        } catch (error) {
            console.error("Error deleting job:", error);
            setJobs(jobs);
        }

    } 
    return (
        <div className="jobs">
            <ul>
                { jobs.map(job => (
                    <li key={job._id}>{ job.title }
                        <button onClick={()=> handleDelete(job._id)}>Delete</button>
                    </li>                
                )) }
            </ul>
           
        </div>
    )
}

export default Jobs;

