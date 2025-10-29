// backend/routes/helloRoutes.js
import express from "express";
import { getHelloMessage } from "../controllers/helloController.js";
import { getSampledata } from "../controllers/sampleDatacontroller.js"; // ✅ fix file name
const router = express.Router();

// Route: GET /api/hello
router.get("/hello", getHelloMessage);

// Route: GET /api/sampledata
router.get("/sampledata", getSampledata);

export default router;
