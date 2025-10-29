// backend/app.js
import express from "express";
import helloRoutes from "./routes/helloRoutes.js"; // ✅ default import

const app = express();

// Middleware
app.use(express.json());

// ✅ Mount the router once under /api
app.use("/api", helloRoutes);

export default app;
