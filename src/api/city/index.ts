import { Router } from 'express';

import {
  getAllCitiesHandler,
  getCityByIdHandler,
  createCityHandler,
  updateCityByIdHandler,
  deleteCityByIdHandler,
} from './city.controller';

import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllCitiesHandler);
router.get('/:id', getCityByIdHandler);
router.post('/', isAuthenticated,hasRole(['ADMINRESTAURANT']),createCityHandler);
router.patch('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), updateCityByIdHandler);
router.delete('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), deleteCityByIdHandler);

export default router;
