const request = require("supertest");
const app = require("../app");

describe("Paystack Payment Tests", () => {
  it("Should initiate payment", async () => {
    const response = await request(app).post("/api/payments/pay").send({
      email: "test@example.com",
      amount: 10000,
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("authorization_url");
  });
});
