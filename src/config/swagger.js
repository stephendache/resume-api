const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Resume & Cover Letter Generator API",
      version: "1.0.0",
      description: "API documentation for generating resumes, cover letters, and handling Paystack payments.",
    },
    servers: [
      { url: "http://localhost:5000", description: "Local Server" },
      { url: "https://yourapi.com", description: "Production Server" },
    ],
    components: {
      securitySchemes: {
        ApiKeyAuth: {
          type: "apiKey",
          in: "header",
          name: "x-api-key",
        },
      },
    },
    security: [{ ApiKeyAuth: [] }],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log("📄 Swagger docs available at: http://localhost:5000/api-docs");
};

module.exports = swaggerDocs;
