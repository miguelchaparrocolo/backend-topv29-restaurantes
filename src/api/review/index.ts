import { Router } from 'express';

import {
  getAllReviewsHandler,
  getReviewByIdHandler,
  createReviewsHandler,
  updateReviewByIdHandler,
  deleteReviewByIdHandler,
} from './review.controller';

const router = Router();

router.get('/', getAllReviewsHandler);
router.get('/:id', getReviewByIdHandler);
router.post('/', createReviewsHandler);
router.patch('/:id', updateReviewByIdHandler);
router.delete('/:id', deleteReviewByIdHandler);

export default router;
