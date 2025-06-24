import express from 'express'
import cors from 'cors';
import sendEmailRoutes from './routes/sendEmail';

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_, res) => {
  res.send('Email API Server is online');
});

app.use('/api', sendEmailRoutes);

export default app;