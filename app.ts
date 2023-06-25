import express from 'express';
import { createServer } from 'http';

import expressConfig from './src/config/express';
import routes from './src/routes';

// setup server
const app = express();
export const server = createServer(app);
// setup express
expressConfig(app);
// routes
routes(app);


export default app;
