import { Request, Response, NextFunction } from "express";

  import{
    getAllPedidos,
    getPedidoById,
    createPedido,
    updatePedidoById,
    deletePedidoById,
  } from './pedido.service';

  export async function getAllPedidosHandler(req: Request, res: Response) {
    const posts = await getAllPedidos();

    return res.json(posts);
  }

  export async function getPedidoByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    try {
      const post = await getPedidoById(id);

      if (!post) {
        return res.status(404).json({ message: 'Pedido not found' });
      }

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function createPedidoHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const data = req.body;

    try {
      const review = await createPedido(data);

      return res.json(review);
    } catch (error) {
      return next(error);
    }
  }

  export async function updatePedidoByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;
    const data = req.body;

    try {
      const post = await updatePedidoById(id, data);

      return res.json(post);
    } catch (error) {
      return next(error);
    }
  }

  export async function deletePedidoByIdHandler(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.params;

    try{
      await deletePedidoById(id);

      return res.sendStatus(200);
    } catch (error){
      return next(error);
    }
  }
