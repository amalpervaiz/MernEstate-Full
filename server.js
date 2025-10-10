import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import authRoutes from './rousuno tes/auth.js';
import uploadRoutes from './routes/upload.js';

dotenv.config();
const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', uploadRoutes); // 

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
