import { Router } from 'express';

import {
  getAllCountriesHandler,
  getCountryByIdHandler,
  createCountriesHandler,
  updateCountryByIdHandler,
  deleteCountryByIdHandler,
} from './country.controller';

const router = Router();

router.get('/', getAllCountriesHandler);
router.get('/:id', getCountryByIdHandler);
router.post('/', createCountriesHandler);
router.patch('/:id', updateCountryByIdHandler);
router.delete('/:id', deleteCountryByIdHandler);

export default router;
