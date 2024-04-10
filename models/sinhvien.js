import mongoose from "mongoose";
const sinhvienSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    age: Number,
    phone: String,
  },
  {
    timestamps: true,
  }
);
const sinhvienModel = mongoose.model("posts", sinhvienSchema);
export default sinhvienModel;
