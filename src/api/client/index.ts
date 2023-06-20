import { Router } from 'express';

import {
  getAllClientsHandler,
  getClientByIdHandler,
  createClientHandler,
  updateClientByIdHandler,
  deleteClientByIdHandler,
} from './client.controller';

const router = Router();

router.get('/', getAllClientsHandler);
router.get('/:id', getClientByIdHandler);
router.post('/', createClientHandler);
router.patch('/:id', updateClientByIdHandler);
router.delete('/:id', deleteClientByIdHandler);

export default router;
