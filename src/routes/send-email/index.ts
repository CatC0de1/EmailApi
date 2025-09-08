import { Router } from 'express';
import cors from 'cors';
import publicRouter from './public';
import privateRouter from './private';
import strictCors from '../../utils/strictCors';

const router = Router();

// router.use()

// ./api/send-email/public
router.use('/public', cors(), publicRouter)

// ./api/send-email/private
router.use('/private', strictCors, privateRouter)

export default router;
