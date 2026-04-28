import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../app";

test("POST /api/validate-card returns true for a valid card number", async () => {
  const response = await request(app)
    .post("/api/validate-card")
    .send({ cardNumber: "4532 0151 1283 0366" });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.isValid, true);
});

test("POST /api/validate-card returns false for an invalid card number", async () => {
  const response = await request(app)
    .post("/api/validate-card")
    .send({ cardNumber: "4532 0151 1283 0367" });

  assert.equal(response.status, 200);
  assert.equal(response.body.success, true);
  assert.equal(response.body.isValid, false);
});

test("POST /api/validate-card returns 400 for missing cardNumber", async () => {
  const response = await request(app)
    .post("/api/validate-card")
    .send({});

  assert.equal(response.status, 400);
  assert.equal(response.body.success, false);
});
