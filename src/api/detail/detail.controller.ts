import { Request, Response, NextFunction } from "express";

  import{
    getAllDetails,
    getDetailById,
    createDetail,
    updateDetailById,
    deleteDetailById,
  } from './detail.service';

  export async function getAllDetailsHandler(req: Request, res: Response) {
    const posts = await getAllDetails();

    return res.json(posts);
  }

  export async function getDetailByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getDetailById(id);

      if (!post) {
        return res.status(404).json({ message: 'Detail not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createDetailHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createDetail(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateDetailByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateDetailById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteDetailByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteDetailById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
