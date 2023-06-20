import cloudinary from 'cloudinary';

  cloudinary.config({
    cloud_name: 'dqrtsgiru',
    api_key: '725456716994153',
    api_secret: '_GS7IBziMAISHwlxzbXOvIa0iJY'
  });

export async function uploadImage(image) {
  try{
    const result = await cloudinary.uploader.upload(image, {
      folder: 'clod_restaurants',
      use_filename: true,
      unique_filename: false,
    });
    return result;
  }catch (error) {
    console.log('error', error)
    return error;
  }
}
