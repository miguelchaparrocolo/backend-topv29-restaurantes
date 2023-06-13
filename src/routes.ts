import { Application } from 'express';
import cityRouter from './api/city';
import countryRouter from './api/country';
import locationRouter from './api/location';

function routes(app: Application) {
  app.use('/api/cities', cityRouter);
  app.use('/api/countries', countryRouter);
  app.use('/api/locations', locationRouter);
}

export default routes;
