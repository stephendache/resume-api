const User = require("../models/userModel");

exports.verifyApiKey = async (req, res, next) => {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey) return res.status(401).json({ error: "API Key required" });

  const user = await User.findOne({ apiKey });
  if (!user) return res.status(403).json({ error: "Invalid API Key" });

  req.user = user;
  next();
};

exports.verifyRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: "Forbidden: Insufficient role" });
    }
    next();
  };
};
