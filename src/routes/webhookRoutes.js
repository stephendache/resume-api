const express = require("express");
const { paystackWebhook } = require("../controllers/webhookController");

const router = express.Router();

/**
 * @swagger
 * /api/webhooks/paystack-webhook:
 *   post:
 *     summary: Paystack webhook listener
 *     tags: [Webhooks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Webhook received
 */
router.post("/paystack-webhook", paystackWebhook);

module.exports = router;