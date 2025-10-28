// server.js
import express from "express";
import cors from "cors";
import helloRoutes from "./backend/routes/helloRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// register routes
app.use("/api", helloRoutes);

// start server
const PORT = 3000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
