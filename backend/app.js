// backend/app.js
import express from "express";
import helloRoutes from "./routes/helloRoutes.js";

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/hello", helloRoutes);

export default app;
