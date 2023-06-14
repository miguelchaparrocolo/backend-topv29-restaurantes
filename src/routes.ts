import { Application } from 'express';
import cityRouter from './api/city';
import countryRouter from './api/country';
import locationRouter from './api/location';
import ubicationRouter from './api/ubication';
import categoryRouter from './api/category';
import foodRouter from './api/food';

function routes(app: Application) {
  app.use('/api/cities', cityRouter);
  app.use('/api/countries', countryRouter);
  app.use('/api/locations', locationRouter);
  app.use('/api/ubication', ubicationRouter);
  app.use('/api(category', categoryRouter);
  app.use('/api/food', foodRouter);
}

export default routes;
