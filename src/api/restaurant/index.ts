import { Router } from 'express';

import {
  getAllRestaurantsHandler,
  getRestaurantByIdHandler,
  createRestaurantHandler,
  updateRestaurantByIdHandler,
  deleteRestaurantByIdHandler,
} from './restaurant.controller';
import { isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllRestaurantsHandler);
router.get('/:id', getRestaurantByIdHandler);
router.post('/', isAuthenticated, createRestaurantHandler);
router.patch('/:id', updateRestaurantByIdHandler);
router.delete('/:id', deleteRestaurantByIdHandler);

export default router;
