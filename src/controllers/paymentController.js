// test
require("dotenv").config()
const paystack = require("paystack-api")(process.env.PAYSTACK_SECRET_KEY);

exports.initiatePayment = async (req, res) => {
  const { email, amount } = req.body;

  if (!email || !amount) return res.status(400).json({ error: "Email & amount required" });

  try {
    const response = await paystack.transaction.initialize({
      email,
      amount: amount * 100, // Convert to kobo
      currency: "NGN",
      callback_url: "http://localhost:5000/api/payments/verify-payment", // Use localhost in test mode
    });

    res.json({
      message: "Test payment initialized",
      authorization_url: response.data.authorization_url,
      reference: response.data.reference,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Test payment failed" });
  }
};

exports.verifyPayment = async (req, res) => {
    const { reference } = req.params;
    if (!reference) return res.status(400).json({ error: "Payment reference required" });
  
    try {
      // Call Paystack API correctly
      const response = await paystack.transaction.verify({ reference });
  
      if (response.data.status === "success") {
        // Simulate API Key Generation for Test Users
        const apiKey = require("crypto").randomBytes(16).toString("hex");
        return res.json({ message: "Test payment successful", apiKey });
      } else {
        return res.status(400).json({ error: "Test payment failed" });
      }
    } catch (error) {
      console.error("Paystack Verification Error:", error);
      res.status(500).json({ error: "Test verification failed" });
    }
  };
  


// live

// const paystack = require("paystack-api")(process.env.PAYSTACK_SECRET_KEY);

// exports.initiatePayment = async (req, res) => {
//   const { email, amount } = req.body;
//   if (!email || !amount) return res.status(400).json({ error: "Email & amount required" });

//   try {
//     const response = await paystack.transaction.initialize({
//       email,
//       amount: amount * 100, // Convert to kobo
//       currency: "NGN",
//       callback_url: "https://yourwebsite.com/verify-payment",
//     });

//     res.json({ authorization_url: response.data.authorization_url, reference: response.data.reference });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Payment failed" });
//   }
// };
