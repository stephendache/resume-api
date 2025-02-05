const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  apiKey: { type: String, required: true, unique: true },
//   role: { type: String, enum: ["admin", "user", "guest"], default: "user" },
  plan: { type: String, enum: ["Basic", "Pro", "Enterprise"], default: "Basic" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("User", UserSchema);

