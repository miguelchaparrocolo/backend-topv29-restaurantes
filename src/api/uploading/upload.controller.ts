import fs from 'fs';

import { uploadImage } from './upload.service';

export async function uploadSingleHandler(req: { file: { path: any; size: any; }; }, res: {
  json(result: any): unknown; status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): any; new(): any; }; };
}) {
  const { path, size } = req.file;

    const maxSize = 1024 * 1024 * 2;

    if (size > maxSize){
      fs.unlinkSync(path)
      return res.status(400).json({
        message: 'File to large'
      })
    }
      try{
        const result = await uploadImage(path)
          return res.status(201).json(result)
      } catch (error){
        return res.status(500).json(error);
      }finally{
        fs.unlinkSync(path)
      }
}



