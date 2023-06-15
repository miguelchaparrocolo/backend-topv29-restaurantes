import { Request, Response, NextFunction } from "express";

  import{
    getAllAdmins,
    getAdminById,
    createAdmin,
    updateAdminById,
    deleteAdminById,
  } from './admin.service';

  export async function getAllAdminsHandler(req: Request, res: Response) {
    const posts = await getAllAdmins();

    return res.json(posts);
  }

  export async function getAdminByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getAdminById(id);

      if (!post) {
        return res.status(404).json({ message: 'Admin not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createAdminHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createAdmin(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateAdminByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateAdminById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteAdminByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteAdminById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
