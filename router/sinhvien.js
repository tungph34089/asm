import express from "express";
import {
  getAllSinhvien,
  getSinhvienID,
  AddSinhvien,
  UpdataSinhvien,
  DeleteSinhvien,
} from "../controllers/sinhvien.js";
const router = express.Router();
router.get("/sinhvien", getAllSinhvien);
router.get("/sinhvien/:id", getSinhvienID);
router.post("/sinhvien", AddSinhvien);
router.put("/sinhvien/:id", UpdataSinhvien);
router.delete("/sinhvien/:id", DeleteSinhvien);
export default router;
