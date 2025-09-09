import express from 'express';
import cors from 'cors';
import sendEmailRouter from './routes/send-email';
import healthRouter from './routes/health';

const app = express();

app.use(express.json());
app.set('trust proxy', 1);

// Routes
app.get('/', (_, res) => {
  res.send('Email API Server is online');
});

app.use('/api/send-email', sendEmailRouter);

app.use('/health', cors(), healthRouter);

export default app;
