
require("dotenv").config()
const OpenAI = require("openai"); // Correct import for OpenAI v4+

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // API key from .env
});

exports.generateResume = async (req, res) => {
  const { name, experience, skills, education } = req.body;
  if (!name || !experience || !skills || !education) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "system", content: `Create a resume for ${name} with experience in ${experience}, skills in ${skills}, and education at ${education}.` }],
      max_tokens: 300,
    });

    res.json({ resume: response.choices[0].message.content.trim() });
  } catch (error) {
    console.error("Error generating resume:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
};
