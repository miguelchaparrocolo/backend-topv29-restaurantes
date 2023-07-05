import { Application } from 'express';
import cityRouter from './api/city';
import countryRouter from './api/country';
import locationRouter from './api/location';
import ubicationRouter from './api/ubication';
import categoryRouter from './api/category';
import foodRouter from './api/food';
import detailRouter from './api/detail';
import pedidoRouter from './api/pedido';
import restaurantRouter from './api/restaurant';
import userRouter from './api/user';
import authLocalRouter from './auth/local';
import paymentRouter from './api/payment';

function routes(app: Application) {

  app.use('/api/users', userRouter);
  app.use('/api/cities', cityRouter);
  app.use('/api/countries', countryRouter);
  app.use('/api/locations', locationRouter);
  app.use('/api/ubication', ubicationRouter);
  app.use('/api/category', categoryRouter);
  app.use('/api/food', foodRouter)
  app.use('/api/detail', detailRouter);
  app.use('/api/pedido', pedidoRouter);
  app.use('/api/restaurants', restaurantRouter);
  app.use('api/payments', paymentRouter);

  //Auth
  app.use('/auth/local',authLocalRouter);

}

export default routes;
