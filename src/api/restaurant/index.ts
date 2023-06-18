import { Router } from 'express';

import {
  getAllRestaurantsHandler,
  getRestaurantByIdHandler,
  createRestaurantHandler,
  updateRestaurantByIdHandler,
  deleteRestaurantByIdHandler,
} from './restaurant.controller';
import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllRestaurantsHandler);
router.get('/:id', getRestaurantByIdHandler);
router.post('/',isAuthenticated,hasRole(['ADMIN']), createRestaurantHandler);
router.patch('/:id', isAuthenticated,hasRole(['ADMIN']),updateRestaurantByIdHandler);
router.delete('/:id',isAuthenticated,hasRole(['ADMIN']), deleteRestaurantByIdHandler);

export default router;
