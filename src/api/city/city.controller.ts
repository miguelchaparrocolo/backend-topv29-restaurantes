import { Request, Response, NextFunction } from 'express';

import {
  getAllCities,
  getCityById,
  createCity,
  updateCityById,
  deleteCityById,
} from './city.service';

export async function getAllCitiesHandler(req: Request, res: Response) {
  const posts = await getAllCities();

  return res.json(posts);
}

export async function getCityByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const post = await getCityById(id);

    if (!post) {
      return res.status(404).json({ message: 'City not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function createCityHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createCity(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updateCityByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updateCityById(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deleteCityByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await deleteCityById(id);

    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}
