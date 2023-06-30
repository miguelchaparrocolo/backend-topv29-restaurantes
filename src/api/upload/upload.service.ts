import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
    cloud_name: 'dqrtsgiru',
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
})

export const maxSize = 1024 * 1024 * 2

export function uploadImg ( image:string ){
  return cloudinary.uploader.upload(image, {
    folder: 'clod_restaurants',
    use_filename: true,
    unique_filename: false,
  })
}
