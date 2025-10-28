// backend/routes/helloRoutes.js
import express from "express";
import { getHelloMessage } from "../controllers/helloController.js";

const router = express.Router();

// Route: GET /api/hello
router.get("/hello", getHelloMessage);

export default router;
