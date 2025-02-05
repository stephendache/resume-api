const User = require("../models/userModel");

exports.getApiKey = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "User not found" });

  res.json({ apiKey: user.apiKey });
};
