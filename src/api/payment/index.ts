import { Router } from 'express';

import {handlerPayment} from './payment.controller';

const router = Router();

router.post('/', handlerPayment);

export default router;
