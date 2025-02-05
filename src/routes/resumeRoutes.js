const express = require("express");
const { generateResume, generateCoverLetter } = require("../controllers/resumeController");
const { generateResumePDF } = require("../utils/generatePdf");
const { generateResumeDOCX } = require("../utils/generateDocx");
const { verifyApiKey, verifyRole } = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/resumes/generate-resume:
 *   post:
 *     summary: Generate a resume in text, PDF, or DOCX format
 *     tags: [Resumes]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               experience:
 *                 type: string
 *               skills:
 *                 type: string
 *               education:
 *                 type: string
 *               format:
 *                 type: string
 *                 enum: [text, pdf, docx]
 *                 default: text
 *     responses:
 *       200:
 *         description: Resume generated successfully
 */
router.post("/generate-resume", verifyApiKey, verifyRole(["admin", "user"]), async (req, res) => {
  const { name, experience, skills, education, format } = req.body;

  if (!name || !experience || !skills || !education) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // Generate resume content
    const resumeData = { name, experience, skills, education };
    const resumeText = await generateResume(resumeData);

    // Handle different formats
    if (format === "pdf") {
      const pdfPath = await generateResumePDF(resumeData);
      return res.download(pdfPath);
    } else if (format === "docx") {
      const docxPath = await generateResumeDOCX(resumeData);
      return res.download(docxPath);
    } else {
      return res.json({ resume: resumeText });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to generate resume" });
  }
});

module.exports = router;
