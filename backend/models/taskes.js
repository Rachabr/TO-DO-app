import mongoose from "mongoose";

const taskes = mongoose.Schema(
  {
    title: { type: String, required: true },
    disc: { type: String, required: true },
    category: { type: String, required: true },
    priorety: { type: String, required: true },
    status: { type: String, required: true },
    userId: {type:String, required: true}
  },
  { timestamps: true }
);

const model = mongoose.model("taskes", taskes)

export default model
