import { Request, Response, NextFunction } from "express";

  import{
    getAllCategories,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById,
  } from './category.service';

  export async function getAllCategoriesHandler(req: Request, res: Response) {
    const posts = await getAllCategories();

    return res.json(posts);
  }

  export async function getCategoryByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getCategoryById(id);

      if (!post) {
        return res.status(404).json({ message: 'Category not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createCategoryHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createCategory(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateCategoryByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateCategoryById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteCategoryByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteCategoryById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
