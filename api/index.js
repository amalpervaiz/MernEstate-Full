import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import uploadRoutes from './routes/image_upload.js'; // ✅ Default import
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listingRoute.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true,

}));


// ✅ Connect MongoDB
mongoose
  .connect(process.env.MONGO_URI).then(() => 
  console.log('✅ Connected to MongoDB!')).catch((err) => 
  console.log('❌ MongoDB Error:', err));

// ✅ Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); 
app.use('/api', uploadRoutes); // ✅ Cloudinary Upload
app.use('/api/listing', listingRouter);  // listing routes

// ✅ Error Handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
