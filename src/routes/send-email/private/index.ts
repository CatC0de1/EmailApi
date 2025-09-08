import { Router } from 'express';
import { sendEmailPrivate } from '../../../controllers/emailController';

const router = Router();

router.post('/', sendEmailPrivate);

export default router;
