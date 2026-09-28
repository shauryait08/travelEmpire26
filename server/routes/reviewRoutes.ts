import { Router, Request, Response } from 'express';
import { INITIAL_REVIEWS } from '../data/seedData';

const router = Router();

// GET /api/reviews
router.get('/', (_req: Request, res: Response) => {
  return res.json(INITIAL_REVIEWS);
});

export default router;
