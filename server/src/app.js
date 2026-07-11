import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import resumeRoutes from "./routes/resume.routes.js";
import interviewRoutes from "./routes/interview.routes.js";

// dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/resume", resumeRoutes);
app.use("/api/interview", interviewRoutes);

app.get("/", (req, res) => {
  res.send("AI Interview Prep API Running...");
});

export default app;