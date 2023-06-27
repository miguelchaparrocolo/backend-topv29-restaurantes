import { Request, Response, NextFunction } from 'express';

import {
  getAllReviews,
  getReviewById,
  createReview,
  updateReviewById,
  deleteReviewById,
} from './review.service';

export async function getAllReviewsHandler(req: Request, res: Response) {
  const posts = await getAllReviews();

  return res.json(posts);
}

export async function getReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const post = await getReviewById(id);

    if (!post) {
      return res.status(404).json({ message: 'Review not found' });
    }

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function createReviewsHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const review = await createReview(data);

    return res.json(review);
  } catch (error) {
    return next(error);
  }
}

export async function updateReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  try {
    const post = await updateReviewById(id, data);

    return res.json(post);
  } catch (error) {
    return next(error);
  }
}

export async function deleteReviewByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;

  try {
    await deleteReviewById(id);

    return res.sendStatus(200);
  } catch (error) {
    return next(error);
  }
}
