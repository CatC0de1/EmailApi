import { Router } from 'express';
import { sendEmailPublic } from '../../controllers/emailController';

const router = Router();

router.post('/', sendEmailPublic);

export default router;
