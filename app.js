require("dotenv").config()
const express = require("express");
const connectDB = require("./src/config/db");  
const app = express();
app.use(express.json());
const swaggerDocs = require("./src/config/swagger");


// Connect MongoDB
connectDB();

// app.use("/api/auth", require("./src/routes/authRoutes"));
app.use("/api/payments", require("./src/routes/paymentRoutes"));
app.use("/api/webhooks", require("./src/routes/webhookRoutes"));
app.use("/api/resumes", require("./src/routes/resumeRoutes"));

// Swagger
swaggerDocs(app);

module.exports = app;
