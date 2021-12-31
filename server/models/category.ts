import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    items: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Item",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Category", categorySchema);
