import { Router } from 'express';

import {
  getAllCitiesHandler,
  getCityByIdHandler,
  createCitiesHandler,
  updateCityByIdHandler,
  deleteCityByIdHandler,
} from './city.controller';

const router = Router();

router.get('/', getAllCitiesHandler);
router.get('/:id', getCityByIdHandler);
router.post('/', createCitiesHandler);
router.patch('/:id', updateCityByIdHandler);
router.delete('/:id', deleteCityByIdHandler);

export default router;
