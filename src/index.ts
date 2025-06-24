import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

app.get('/', (_, res) => {
  res.send('Email API server is online');
});

app.listen(PORT, () => {
  console.log(`\nEmail API server running on http://localhost:${PORT}\n`);
});
