import { Router } from 'express';

import {
  getAllAdminsHandler,
  getAdminByIdHandler,
  createAdminHandler,
  updateAdminByIdHandler,
  deleteAdminByIdHandler,
} from './admin.controller';

const router = Router();

router.get('/', getAllAdminsHandler);
router.get('/:id', getAdminByIdHandler);
router.post('/', createAdminHandler);
router.patch('/:id', updateAdminByIdHandler);
router.delete('/:id', deleteAdminByIdHandler);

export default router;
