import { Router } from 'express';

import { loginHandler, activateHandler } from './local.controller';

const router = Router();

// login -> POST -> /auth/local/login http://localhost:3030/auth/local/login
router.post('/login', loginHandler);

// change password
// reset password
// activate account -> /auth/local/activate/:token
router.get('/activate/:token', activateHandler);
// logout

export default router;
