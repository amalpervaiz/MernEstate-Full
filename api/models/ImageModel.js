import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
  {
    image_url: {
      type: String,
      required: true,
      trim: true,
    },
    public_id: {
      type: String,
      required: true,
      unique: true,
    },
    list: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // ye User model ko reference karega
      },
    ],
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);

export default Image;
