// backend/controllers/sampleDataController.js
import { sampleData } from "../models/sampleModel.js";

export const getSampledata = (req, res) => {
  res.json(sampleData);
};
