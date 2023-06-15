import { Request, Response, NextFunction } from "express";

  import{
    getAllClients,
    getClientById,
    createClient,
    updateClientById,
    deleteClientById,
  } from './client.service';

  export async function getAllClientsHandler(req: Request, res: Response) {
    const posts = await getAllClients();

    return res.json(posts);
  }

  export async function getClientByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getClientById(id);

      if (!post) {
        return res.status(404).json({ message: 'Client not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createClientHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createClient(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updateClientByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updateClientById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deleteClientByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deleteClientById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
