import { Router } from 'express';

const router = Router();

router.get('/', async (_req, res) => {
  res.send('Hello');
});

router.post('/', async (req, res) => {});

export default router;
