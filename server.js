import express from "express";
import mongoose from "mongoose";
import router from "./router/sinhvien.js";
const app = express();
app.use(express.json());
app.use("/api", router);
const connectDB = async () => {
  try {
    mongoose.connect(`mongodb://localhost:27017/Asm`);
    console.log("ket noi thanh cong");
  } catch (error) {
    console.log("kết nối không thành công");
  }
};

app.listen(4000, () => {
  connectDB();
  console.log(`Endpoint http://localhost:4000`);
});
