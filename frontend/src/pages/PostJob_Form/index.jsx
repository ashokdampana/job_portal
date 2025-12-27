import './index.css'
import { useState } from "react"

function PostJob () {

    console.log('Post job form')
    const [ title, setTitle ] = useState('')
    const [ company, setCompany ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ skills, setSkills ] = useState('')
    const [ location, setLocation ] = useState('')
    const [ salary, setSalary ] = useState('')

    const handlePostJob = (e) => {
        e.preventDefault();
        const jobData = {
            title, company, description, 
            skills: skills.split(',').map(s => s.trim()), 
            location, salary
        }
        console.log( jobData );
    }

    return (
        <div className="post-job-form">
            <form onSubmit={ handlePostJob }>
                <input 
                    placeholder="Title"
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required
                />
                <input 
                    placeholder="Company"
                    type="text"
                    value={company}
                    onChange={e => setCompany(e.target.value)}
                    required
                />
                <textarea
                    placeholder="Description"
                    type="text"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    required
                    rows={4}
                    cols={24}
                />
                <input 
                    placeholder="Skills (use ,)"
                    type="text"
                    value={skills}
                    onChange={e => setSkills(e.target.value)}
                    required
                />
                <input 
                    placeholder="Location"
                    type="text"
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required
                />
                <input 
                    placeholder="Salary"
                    type="number"
                    value={salary}
                    onChange={e => setSalary(e.target.value)}
                    required
                />
                <button type="Submit">Post Job</button>
            </form>
        </div>
    )
}

export default PostJob