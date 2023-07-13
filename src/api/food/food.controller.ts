import { Request, Response, NextFunction } from "express";

  import{
    getAllFoods,
    getFoodById,
    createFood,
    updateFoodById,
    deleteFoodById,
  } from './food.service';

  export async function getAllFoodsHandler(req: Request, res: Response) {
    const posts = await getAllFoods();

    return res.json(posts);
  }

  export async function getFoodByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getFoodById(id);

      if (!post) {
        return res.status(404).json({ message: 'Food not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createFoodHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;
    const restauranteId = data.restaurantesId as String;

    try {
      const review = await createFood(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateFoodByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateFoodById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteFoodByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteFoodById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
