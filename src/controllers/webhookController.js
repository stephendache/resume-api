
require("dotenv").config()
const User = require("../models/userModel");
const Payment = require("../models/paymentModel");
const { generateApiKey } = require("../utils/generateApiKey");

exports.paystackWebhook = async (req, res) => {
  const hash = require("crypto").createHmac("sha512", process.env.PAYSTACK_SECRET_KEY)
    .update(JSON.stringify(req.body)).digest("hex");

  if (hash !== req.headers["x-paystack-signature"]) {
    return res.status(403).json({ error: "Invalid signature" });
  }

  const event = req.body;
  if (event.event === "charge.success") {
    const email = event.data.customer.email;
    const reference = event.data.reference;
    const amount = event.data.amount / 100; // Convert from kobo
    const plan = amount === 10000 ? "Basic" : "Pro"; // Adjust based on price

    // Generate API Key
    const apiKey = generateApiKey();

    // Store Payment Record
    await Payment.create({ email, amount, reference, status: "successful" });

    // Store API Key & Plan
    const user = await User.findOneAndUpdate({ email }, { apiKey, plan }, { new: true, upsert: true });

    console.log(`✅ User ${email} activated with API Key: ${apiKey}`);

    res.status(200).json({ message: "Payment verified", apiKey, plan });
  } else {
    await Payment.create({ email: event.data.customer.email, reference: event.data.reference, status: "failed" });
    res.status(400).json({ error: "Payment verification failed" });
  }
};
