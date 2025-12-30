import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));


// Example route
app.get('/', (req, res) => {
  res.json({ message:'Hello, Job Portal Backend!'});
});

import authRoutes from './routes/authRoutes.js';
app.use('/api/auth', authRoutes);

import jobRoutes from './routes/jobRoutes.js';
app.use('/api/jobs', jobRoutes);

export default app;
