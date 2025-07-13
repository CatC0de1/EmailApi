import express from 'express'
import cors from 'cors';
import sendEmailRoutes from './routes/sendEmail';
import healthCheck from './routes/healthCheck';
import dotenv from 'dotenv';

const app = express();

dotenv.config();

app.use(cors({
  origin: [
    process.env.CORS_ORIGIN_1,
    process.env.CORS_ORIGIN_2,
  ].filter((origin): origin is string => typeof origin === 'string'),
  methods: [
    'POST',
    'OPTIONS'
  ]
}));
app.use(express.json());

// Routes
app.get('/', (_, res) => {
  res.send('Email API Server is online');
});

app.use('/api', sendEmailRoutes);

app.use('/health', healthCheck);

export default app;