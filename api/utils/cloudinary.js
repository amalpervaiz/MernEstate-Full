import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;

// // ✅ TEST CODE
// const testCloudinary = async () => {
//   try {
//     const result = await cloudinary.uploader.upload("https://res.cloudinary.com/demo/image/upload/sample.jpg");
//     console.log("✅ Cloudinary connected, Image URL:", result.secure_url);
//   } catch (error) {
//     console.error("❌ Cloudinary connection failed:", error.message);
//   }
// };

// testCloudinary();
