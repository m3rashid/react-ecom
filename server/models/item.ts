import mongoose from "mongoose";

const itemSchema = new mongoose.Schema(
  {
    title: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    description: String,
    image: String,
    price: Number,
    rating: {
      count: { type: Number, default: 0 },
      rate: [{ type: Number, default: 5 }],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", itemSchema);
