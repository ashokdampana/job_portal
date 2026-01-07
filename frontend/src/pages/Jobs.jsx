// import './jobs.css'
import { useState, useEffect } from "react";
import API from "../api/api";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null); // track which job is being edited
  const [formData, setFormData] = useState({ title: "" });

  useEffect(() => {
    API.get("/api/jobs")
      .then((res) => setJobs(res.data.jobs || []))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = async (_id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this job?");
    if (!confirmDelete) return;

    setJobs(jobs.filter((job) => job._id !== _id));
    try {
      await API.delete(`/api/jobs/${_id}`);
    } catch (error) {
      console.error("Error deleting job:", error);
    }
  };

  const startEdit = (job) => {
    setEditingJob(job._id);
    setFormData({ title: job.title });
  };

  const handleUpdate = async (_id) => {
    try {
        await API.patch(`/api/jobs/${_id}`, formData);
      // update local state
      setJobs(jobs.map((job) => (job._id === _id ? { ...job, ...formData } : job)));
      setEditingJob(null); // close form
      
    } catch (error) {
      console.error("Error updating job:", error);
    }
  };

  return (
   <div className="jobs">
  <div className="jobs-list">
    {jobs.map((job) => (
      <div key={job._id} className="card">
        <div className="card-body">
          {editingJob === job._id ? (
            <>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
              />
              <button onClick={() => handleUpdate(job._id)}>Save</button>
              <button onClick={() => setEditingJob(null)}>Cancel</button>
            </>
          ) : (
            <>
              <h5 className="card-title">{job.title}</h5>
              <button onClick={() => handleDelete(job._id)}>Delete</button>
              <button onClick={() => startEdit(job)}>Update</button>
            </>
          )}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}

export default Jobs;
