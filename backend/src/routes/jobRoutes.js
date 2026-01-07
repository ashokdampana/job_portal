
import Job from '../models/Job.js';
import express from 'express';
import adminOnly from '../middleware/adminOnly.js'

const router = express.Router();

router.post('/', adminOnly,  async (req, res) => {
    const {title, company, description, skills, location, salary} = req.body;
    const newJob = new Job( {title, company, description, skills, location, salary});
    await newJob.save();
    res.status(201).json({message: "Job posted successfully"})
})


router.get('/', async (req, res) => {
    const jobs = await Job.find();
    if (jobs.length === 0) {
        return res.status(400).json({message: "No job Posts"});
    }
    res.status(200).json({ jobs });
})

router.get('/:id', async (req, res) => {
    const job = await Job.findOne({ title: req.params.id });
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: job });
})

router.delete('/:id', adminOnly, async (req, res) => {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) return res.status(404).json({ message: "Job not found" });
    res.status(200).json({ message: "Job deleted successfully" });
})

router.patch('/:id', adminOnly, async (req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(
        req.params.id, { $set: req.body } , {new: true}
    );
    res.status(200).json({ updatedJob });
})

export default router;