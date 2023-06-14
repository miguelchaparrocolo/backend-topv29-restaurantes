import { Request, Response, NextFunction } from "express";

  import{
    getAllUbications,
    getUbicationById,
    createUbication,
    updateUbicationById,
    deleteUbicationById,
  } from './ubication.service';

  export async function getAllUbicationsHandler(req: Request, res: Response) {
    const posts = await getAllUbications();

    return res.json(posts);
  }

  export async function getUbicationByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getUbicationById(id);

      if (!post) {
        return res.status(404).json({ message: 'Ubication not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createUbicationHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createUbication(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateUbicationByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateUbicationById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteUbicationByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteUbicationById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
