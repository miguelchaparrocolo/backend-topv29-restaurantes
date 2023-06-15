import { Request, Response, NextFunction } from "express";

  import{
    getAllRestaurants,
    getRestaurantById,
    createRestaurant,
    updateRestaurantById,
    deleteRestaurantById,
  } from './restaurant.service';

  export async function getAllRestaurantsHandler(req: Request, res: Response) {
    const posts = await getAllRestaurants();

    return res.json(posts);
  }

  export async function getRestaurantByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getRestaurantById(id);

      if (!post) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createRestaurantHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createRestaurant(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateRestaurantByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateRestaurantById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteRestaurantByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteRestaurantById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
