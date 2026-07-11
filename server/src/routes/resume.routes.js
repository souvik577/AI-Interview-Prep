import express from "express";
import upload from "../middleware/upload.js";
import verifyFirebaseToken from "../middleware/auth.middleware.js";
import {
  uploadResume,
  getAnalysisHistory,
  getProfileStats,
} from "../controllers/resume.controller.js";

const router = express.Router();

router.post(
  "/upload",
  verifyFirebaseToken,
  upload.single("resume"),
  uploadResume
);
router.get(
  "/history",
  verifyFirebaseToken,
  getAnalysisHistory
);

router.get(
  "/profile",
  verifyFirebaseToken,
  getProfileStats
);

export default router;