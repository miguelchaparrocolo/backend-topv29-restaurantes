import { Router } from 'express';

import {
  getAllLocationsHandler,
  getLocationByIdHandler,
  createLocationsHandler,
  updateLocationByIdHandler,
  deleteLocationByIdHandler,
} from './location.controller';

const router = Router();

router.get('/', getAllLocationsHandler);
router.get('/:id', getLocationByIdHandler);
router.post('/', createLocationsHandler);
router.patch('/:id', updateLocationByIdHandler);
router.delete('/:id', deleteLocationByIdHandler);

export default router;
