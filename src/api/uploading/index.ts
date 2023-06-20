import multer from 'multer'
import { Router } from 'express';
import { uploadSingleHandler } from './upload.controller';
const cloudinary = require('cloudinary').v2;

  const router = Router();
  const upload = multer({ dest:'./temp' })



  router.post('/file', upload.single('file'),  uploadSingleHandler);
  router.post('/files', () => {})
