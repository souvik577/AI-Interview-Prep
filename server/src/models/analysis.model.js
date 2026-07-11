import mongoose from "mongoose";

const analysisSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    fileName: {
      type: String,
      required: true,
    },

    atsScore: {
      type: Number,
      required: true,
    },

    strengths: [String],

    weaknesses: [String],

    missingSkills: [String],

    suggestions: [String],
  },
  {
    timestamps: true,
  }
);

const Analysis = mongoose.model("Analysis", analysisSchema);

export default Analysis;