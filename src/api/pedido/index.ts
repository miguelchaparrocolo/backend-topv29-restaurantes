import { Router } from 'express';

import {
  getAllPedidosHandler,
  getPedidoByIdHandler,
  createPedidoHandler,
  updatePedidoByIdHandler,
  deletePedidoByIdHandler,
} from './pedido.controller';

const router = Router();

router.get('/', getAllPedidosHandler);
router.get('/:id', getPedidoByIdHandler);
router.post('/', createPedidoHandler);
router.patch('/:id', updatePedidoByIdHandler);
router.delete('/:id', deletePedidoByIdHandler);

export default router;
