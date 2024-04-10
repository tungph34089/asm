import mongoose from "mongoose";
const UserChenma = mongoose.Schema(
  {
    name: String,
    email: String,
    Password: String,
  },
  {
    time,
  }
);

export const sinhvien = mongoose.model("posts", UserChenma);
