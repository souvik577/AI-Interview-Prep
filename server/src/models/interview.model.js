
import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    level: {
      type: String,
      required: true,
    },

    questions: {
      type: [String],
      default: [],
    },

    answers: {
      type: [String],
      default: [],
    },

    score: {
      type: Number,
      default: 0,
    },

    feedback: {
      strengths: [String],
      weaknesses: [String],
      suggestions: [String],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Interview", interviewSchema);