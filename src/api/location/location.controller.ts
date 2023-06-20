import { Request, Response, NextFunction } from 'express';

import {
  getAllLocations,
  getLocationById,
  createLocation,
  updateLocationById,
  deleteLocationById,
} from './location.service';

export async function getAllLocationsHandler(req: Request, res: Response) {
  const posts = await getAllLocations();

  return res.json(posts);
}

export async function getLocationByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const post = await getLocationById(id);

    if (!post) {
      return res.status(404).json({ message: 'Location not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function createLocationsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createLocation(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updateLocationByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updateLocationById(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deleteLocationByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await deleteLocationById(id);

    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}
