import { Router } from 'express';
import { sendEmailPublic } from '../../controllers/emailController';
import { publicEmailLimiter } from '../../utils/rateLimiter';

const router = Router();

router.post('/', sendEmailPublic, publicEmailLimiter);

export default router;
