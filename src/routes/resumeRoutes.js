const express = require("express");
const { generateResume, generateCoverLetter } = require("../controllers/resumeController");
// const { generateResume } = require("../controllers/resumeController");
const { verifyApiKey, verifyRole } = require("../middlewares/authMiddleware");

const router = express.Router();

/**
 * @swagger
 * /api/resumes/generate-resume:
 *   post:
 *     summary: Generate a resume
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
 *     responses:
 *       200:
 *         description: Resume generated successfully
 */
router.post("/generate-resume", verifyApiKey, generateResume);
router.post("/generate-resume", verifyApiKey, verifyRole(["admin", "user"]), generateResume);
module.exports = router;
