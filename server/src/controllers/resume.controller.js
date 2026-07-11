import { extractPdfText } from "../utils/pdfExtractor.js";
import { analyzeResume } from "../services/gemini.service.js";
import Analysis from "../models/analysis.model.js";


export const uploadResume = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required.",
      });
    }

    const userId = req.user.uid;
    const resumeText = await extractPdfText(req.file.path);

    const aiResponse = await analyzeResume(resumeText);

    await Analysis.create({
      userId: userId, // Firebase UID baad me add karenge
      fileName: req.file.originalname,
      atsScore: aiResponse.atsScore,
      strengths: aiResponse.strengths,
      weaknesses: aiResponse.weaknesses,
      missingSkills: aiResponse.missingSkills,
      suggestions: aiResponse.suggestions,
    });

    res.json({
      success: true,
      analysis: aiResponse,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getAnalysisHistory = async (req, res) => {
  try {
    const userId = req.user.uid;

    const history = await Analysis.find({
      userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      history,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getProfileStats = async (req, res) => {
  try {
    const userId = req.user.uid;

    const analyses = await Analysis.find({
      userId,
    });

    const totalAnalyses = analyses.length;

    const bestScore =
      analyses.length > 0
        ? Math.max(...analyses.map((item) => item.atsScore))
        : 0;

    const averageScore =
      analyses.length > 0
        ? Math.round(
            analyses.reduce((sum, item) => sum + item.atsScore, 0) /
              analyses.length
          )
        : 0;

    res.json({
      success: true,
      totalAnalyses,
      bestScore,
      averageScore,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};