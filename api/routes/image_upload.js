import express from 'express';
import multer from 'multer';
import { UploadImage } from '../utils/uploadimages.js';
import User from '../models/userModels.js';
import { verifyToken } from '../middleware/verifyToken.js'; // ✅ Add JWT middleware

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', verifyToken, upload.single('Image'), async (req, res) => {
  console.log("🔥 req.file:", req.file);
  console.log("🔥 req.body:", req.body);

  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  try {
    const result = await UploadImage(req.file.buffer, 'mern_estate');

    // ✅ User collection update
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { avatar: result.secure_url },
      { new: true }
    );

    res.json({
      success: true,
      message: 'Profile image updated successfully',
      user: updatedUser
    });
  } catch (error) {
    console.error("❌ Upload failed:", error);
    res.status(500).json({ error: 'Upload failed', details: error.message });
  }
});

export default router;
