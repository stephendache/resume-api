const request = require("supertest");
const app = require("../app");

describe("Resume API Tests", () => {
  let apiKey = "test-api-key"; // Use a test key or mock DB

  it("Should generate a resume", async () => {
    const response = await request(app)
      .post("/api/resumes/generate-resume")
      .set("x-api-key", apiKey)
      .send({
        name: "John Doe",
        experience: "Software Engineer at Google",
        skills: "JavaScript, React, Node.js",
        education: "B.Sc Computer Science",
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("resume");
  });

  it("Should return 401 if API key is missing", async () => {
    const response = await request(app)
      .post("/api/resumes/generate-resume")
      .send({
        name: "John Doe",
        experience: "Software Engineer",
        skills: "React, Node.js",
        education: "B.Sc",
      });

    expect(response.status).toBe(401);
  });
});
