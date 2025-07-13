import { Router } from 'express';

const router = Router();

router.get('/ping', (_, res) => {
  res.sendStatus(200);
});

export default router;