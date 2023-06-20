import * as dotenv from 'dotenv';
import express from 'express';
dotenv.config();
import confExpress from './src/config/express';
import routes from './src/routes';

const app = express();


const PORT = process.env.PORT ?? 3030;

confExpress(app);

routes(app);

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`);
});
