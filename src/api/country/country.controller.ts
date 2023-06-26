import { Request, Response, NextFunction } from 'express';

import {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountryById,
  deleteCountryById,
} from './country.service';

export async function getAllCountriesHandler(req: Request, res: Response) {
  const posts = await getAllCountries();

  return res.json(posts);
}

export async function getCountryByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const post = await getCountryById(id);

    if (!post) {
      return res.status(404).json({ message: 'Country not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function createCountryHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createCountry(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updateCountryByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updateCountryById(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deleteCountryByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await deleteCountryById(id);

    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}
