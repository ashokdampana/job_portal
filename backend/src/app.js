import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Example route
app.get('/api/data', (req, res) => {
  res.json({ message:'Hello, Job Portal Backend!'});
});

export default app;
