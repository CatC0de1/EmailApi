import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const strictCors = cors({
  origin: [
    process.env.CORS_ORIGIN_1,
    process.env.CORS_ORIGIN_2,
  ].filter((origin): origin is string => typeof origin === 'string'),
  methods: [
    'POST',
    'OPTIONS'
  ]
});

export default strictCors;
