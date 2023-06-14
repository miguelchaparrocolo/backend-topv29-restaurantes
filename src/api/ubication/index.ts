import { Router } from 'express';

import {
  getAllUbicationsHandler,
  getUbicationByIdHandler,
  createUbicationHandler,
  updateUbicationByIdHandler,
  deleteUbicationByIdHandler,
} from './ubication.controller';

const router = Router();

router.get('/', getAllUbicationsHandler);
router.get('/:id', getUbicationByIdHandler);
router.post('/', createUbicationHandler);
router.patch('/:id', updateUbicationByIdHandler);
router.delete('/:id', deleteUbicationByIdHandler);

export default router;
