import { Router } from 'express';

import {
  getAllFoodsHandler,
  getFoodByIdHandler,
  createFoodHandler,
  updateFoodByIdHandler,
  deleteFoodByIdHandler,
} from './food.controller';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllFoodsHandler);
router.get('/:id', getFoodByIdHandler);
router.post('/', isAuthenticated,hasRole(['ADMINRESTAURANT']),createFoodHandler);
router.patch('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), updateFoodByIdHandler);
router.delete('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), deleteFoodByIdHandler);

export default router;
