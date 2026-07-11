import "dotenv/config";
import app from "./src/app.js";
import connectDB from "./src/config/db.js";

const PORT = process.env.PORT || 5000;
await connectDB();

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
console.log("API KEY:", process.env.GEMINI_API_KEY ? "FOUND" : "NOT FOUND");
console.log("USE_VERTEXAI:", process.env.GOOGLE_GENAI_USE_VERTEXAI);
console.log("PROJECT:", process.env.GOOGLE_CLOUD_PROJECT);