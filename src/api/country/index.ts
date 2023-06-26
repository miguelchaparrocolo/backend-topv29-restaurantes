import { Router } from 'express';

import {
  getAllCountriesHandler,
  getCountryByIdHandler,
  createCountryHandler,
  updateCountryByIdHandler,
  deleteCountryByIdHandler,
} from './country.controller';

import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllCountriesHandler);
router.get('/:id', getCountryByIdHandler);
router.post('/', isAuthenticated,hasRole(['ADMINRESTAURANT']),createCountryHandler);
router.patch('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), updateCountryByIdHandler);
router.delete('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), deleteCountryByIdHandler);

export default router;
