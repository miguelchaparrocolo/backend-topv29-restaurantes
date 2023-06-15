import { Router } from 'express';

import {
  getAllDetailsHandler,
  getDetailByIdHandler,
  createDetailHandler,
  updateDetailByIdHandler,
  deleteDetailByIdHandler,
} from './detail.controller';

const router = Router();

router.get('/', getAllDetailsHandler);
router.get('/:id', getDetailByIdHandler);
router.post('/', createDetailHandler);
router.patch('/:id', updateDetailByIdHandler);
router.delete('/:id', deleteDetailByIdHandler);

export default router;
