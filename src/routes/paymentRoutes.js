const express = require("express");
const { initiatePayment, verifyPayment } = require("../controllers/paymentController");

const router = express.Router();

/**
 * @swagger
 * /api/payments/pay:
 *   post:
 *     summary: Initiate Paystack payment
 *     tags: [Payments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               amount:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Payment initialized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 authorization_url:
 *                   type: string
 */
router.post("/pay", initiatePayment);
router.get("/verify-payment/:reference", verifyPayment); // Make sure this line exists

module.exports = router;
