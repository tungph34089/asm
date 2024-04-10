import sinhvienModel from "../models/sinhvien.js";
export const getAllSinhvien = async (req, res) => {
  try {
    const Sinhvien = await sinhvienModel.find();
    return res.status(200).json({ status: true, date: Sinhvien });
  } catch {
    return res.status(503).json({ status: false, message: "loi req" });
  }
};
export const getSinhvienID = async (req, res) => {
  try {
    const id = req.params.id;
    const Sinhvien = await sinhvienModel.find({ _id: id });
    return res.status(200).json({ status: true, date: Sinhvien });
  } catch {
    return res.status(503).json({ status: false, message: "loi req" });
  }
};
export const AddSinhvien = async (req, res) => {
  try {
    const body = req.body;
    const sinhvienmodel = new sinhvienModel(body);
    const Sinhvien = await sinhvienmodel.save();
    return res.status(200).json({ status: true, date: Sinhvien });
  } catch {
    return res.status(503).json({ status: false, message: "loi req" });
  }
};
export const UpdataSinhvien = async (req, res) => {
  try {
    const body = req.body;
    const id = req.params.id;
    const Sinhvien = await sinhvienModel.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res
      .status(200)
      .json({ status: true, date: Sinhvien, message: "sua thanh cong" });
  } catch {
    return res.status(503).json({ status: false, message: "loi req" });
  }
};
export const DeleteSinhvien = async (req, res) => {
  try {
    const id = req.params.id;
    const Sinhvien = await sinhvienModel.findOneAndDelete({ _id: id });
    return res
      .status(200)
      .json({ status: true, date: Sinhvien, message: "xoa thanh cong" });
  } catch {
    return res.status(503).json({ status: false, message: "loi req" });
  }
};
