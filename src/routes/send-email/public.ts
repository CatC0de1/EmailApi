import { Router } from 'express';
import { sendEmailPublic } from '../../controllers/emailController';

const router = Router();

router.get('/', sendEmailPublic);

export default router;