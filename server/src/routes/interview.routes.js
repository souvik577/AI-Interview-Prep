import Interview from "../models/interview.model.js";
import express from "express";
import verifyFirebaseToken from "../middleware/auth.middleware.js";
import { generateInterviewQuestions } from "../services/interview.service.js";

const router = express.Router();

router.post("/start", verifyFirebaseToken, async (req, res) => {
  try {
    const { role, level } = req.body;

    const result = await generateInterviewQuestions(role, level);

    const interview = await Interview.create({
      userId: req.user.uid,
      role,
      level,
      questions: result.questions,
    });

    res.json({
      success: true,
      interviewId: interview._id,
      questions: interview.questions,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;