import { Router } from 'express';

import {
  getAllCategoriesHandler,
  getCategoryByIdHandler,
  createCategoryHandler,
  updateCategoryByIdHandler,
  deleteCategoryByIdHandler,
} from './category.controller';

const router = Router();

router.get('/', getAllCategoriesHandler);
router.get('/:id', getCategoryByIdHandler);
router.post('/', createCategoryHandler);
router.patch('/:id', updateCategoryByIdHandler);
router.delete('/:id', deleteCategoryByIdHandler);

export default router;
