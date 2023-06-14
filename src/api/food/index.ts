import { Router } from 'express';

import {
  getAllFoodsHandler,
  getFoodByIdHandler,
  createFoodHandler,
  updateFoodByIdHandler,
  deleteFoodByIdHandler,
} from './food.controller';

const router = Router();

router.get('/', getAllFoodsHandler);
router.get('/:id', getFoodByIdHandler);
router.post('/', createFoodHandler);
router.patch('/:id', updateFoodByIdHandler);
router.delete('/:id', deleteFoodByIdHandler);

export default router;
