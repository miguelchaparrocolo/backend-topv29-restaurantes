import express, { Application } from 'express';
import cors from 'cors';
import morgan from 'morgan';

function confExpress(app: Application) {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(morgan('dev'));
}

export default confExpress;
