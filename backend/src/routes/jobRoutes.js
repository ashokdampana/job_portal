
import { jobValid } from '../../validations/jobValidation.js';
import Job from '../models/Job.js';
import express from 'express';

const router = express.Router();

router.post('/', jobValid, async (req, res) => {
    const errors = validationResult(req);
    if ( ! errors.isEmpty() ) {
        return res.status(400).json({errors: errors.arrays()})
    }
    const newJob = new Job(...req.body);
    await newJob.save();
    res.status(201).json({message: "Job posted successfully"})
})


router.get('/', async (req, res) => {
    const jobs = await Job.find();
    if (jobs.length === 0) {
        return res.status(400).json({message: "No job Posts"});
    }
    res.status(200).json({ message: jobs });
})

router.get('/:id', async (req, res) => {
    const job = await Job.findOne({  })
})

export default router;