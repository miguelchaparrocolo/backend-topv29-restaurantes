import { Router } from 'express';

import {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  createCategoryHandler,
  updateCategoryByIdHandler,
  deleteCategoryByIdHandler,
} from './category.controller';

import { hasRole, isAuthenticated } from '../../auth/auth.controller';

const router = Router();

router.get('/', getAllCategoriesHandler);
router.get('/:id', getCategoryByIdHandler);
router.post('/', isAuthenticated,hasRole(['ADMINRESTAURANT']),createCategoryHandler);
router.patch('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), updateCategoryByIdHandler);
router.delete('/:id',isAuthenticated,hasRole(['ADMINRESTAURANT']), deleteCategoryByIdHandler);

export default router;
