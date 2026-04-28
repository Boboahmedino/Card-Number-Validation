# 🎴 Card Validator API

> A clean, lightweight, and professional TypeScript backend API for validating card numbers using the Luhn Algorithm.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-minimal-black?logo=express)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/Tested%20with-Postman-orange?logo=postman)](https://www.postman.com/)
[![License](https://img.shields.io/badge/License-Learning%20Project-lightgrey)](#license)

---

## ✨ Overview

The **Card Validator API** is a simple backend service built with **Node.js**, **TypeScript**, and **Express.js** that validates whether a card number is valid or not using the industry-standard **Luhn Algorithm**.

This project was created as part of a Backend Developer Intern Assessment to demonstrate:

* REST API design
* Input validation and error handling
* Card number checksum verification
* Clean project structure
* TypeScript strict mode usage
* API testing with Postman
* Basic automated testing

The goal is not just to make the API work, but to show clean architecture, proper backend thinking, and clear technical decision-making.

---

## 🚀 Features

* 🔒 Card number validation using the Luhn Algorithm
* ✅ Strict request validation
* 📦 Clear and consistent JSON responses
* 🧩 Modular code structure (Routes, Controllers, Services)
* ⚠️ Proper HTTP status codes
* 🧪 Automated testing included
* 🧑‍💻 Manual API testing with Postman

### Validation Rules

The API validates that:

* `cardNumber` is required
* `cardNumber` must be a string
* Empty values are rejected
* Only digits and spaces are allowed
* Final validation is performed using the Luhn checksum algorithm

---

## 🛠 Tech Stack

| Technology  | Purpose                         |
| ----------- | ------------------------------- |
| Node.js     | Runtime environment             |
| TypeScript  | Type safety and maintainability |
| Express.js  | Backend framework               |
| Postman     | API testing                     |
| Test Runner | Automated endpoint testing      |

---

## 📡 API Endpoint

## POST `/api/validate-card`

This endpoint accepts a card number and returns whether it is valid or not.

---

## 📥 Request Body

```json
{
  "cardNumber": "4532 0151 1283 0366"
}
```

---

## ✅ Success Response

### Valid Card

```json
{
  "success": true,
  "cardNumber": "4532 0151 1283 0366",
  "isValid": true
}
```

---

## ❌ Invalid Card Response

```json
{
  "success": true,
  "cardNumber": "1234 5678 9012 3456",
  "isValid": false
}
```

---

## ⚠️ Bad Request Response

### Missing Input

```json
{
  "success": false,
  "message": "cardNumber is required"
}
```

Status Code:

```text
400 Bad Request
```

---

## 📂 Project Structure

```text
card-validator-api/
│
├── src/
│   ├── controllers/
│   │   └── card.controller.ts
│   │
│   ├── routes/
│   │   └── card.routes.ts
│   │
│   ├── services/
│   │   └── card.service.ts
│   │
│   ├── tests/
│   │   └── card.test.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone <your-github-repository-link>
cd card-validator-api
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Start Development Server

```bash
npm run dev
```

Expected output:

```bash
Server is running on port 3000
```

This means the API is active and waiting for incoming requests.

---

### 4. Build for Production

```bash
npm run build
```

---

### 5. Run Tests

```bash
npm test
```

---

## 🧪 Testing the API

## Using Postman

### Step 1

Open Postman and create a new request.

### Step 2

Change request type from:

```text
GET
```

to:

```text
POST
```

---

### Step 3

Enter the URL:

```text
http://localhost:3000/api/validate-card
```

---

### Step 4

Go to:

```text
Body → raw → JSON
```

---

### Step 5

Paste this request body:

```json
{
  "cardNumber": "4532 0151 1283 0366"
}
```

---

### Step 6

Click:

```text
Send
```

---

### Expected Response

```json
{
  "success": true,
  "cardNumber": "4532 0151 1283 0366",
  "isValid": true
}
```

---

## Example Invalid Request

```json
{
  "cardNumber": "123456789"
}
```

Response:

```json
{
  "success": true,
  "cardNumber": "123456789",
  "isValid": false
}
```

---

## Example Missing Input

```json
{}
```

Response:

```json
{
  "success": false,
  "message": "cardNumber is required"
}
```

---

## 🧠 Design Decisions

## Why Express.js?

Express.js was chosen because this project only requires a single endpoint. It is lightweight, easy to set up, and much easier to explain during a live technical review compared to larger frameworks like NestJS.

---

## Why TypeScript?

TypeScript improves code reliability through static typing and strict mode checks. It helps catch development errors early and makes the project easier to maintain.

---

## Why the Luhn Algorithm?

The Luhn Algorithm is the industry-standard checksum method used for validating card numbers before payment processing. It is lightweight, reliable, and the correct professional choice for this assessment.

---

## Why Separate Routes, Controllers, and Services?

This structure improves readability and maintainability.

* **Routes** define endpoint paths
* **Controllers** handle request and response logic
* **Services** contain business logic (validation)

This keeps responsibilities clear and makes the code easier to test and scale.

---

## Why Return 400 for Missing Input?

A missing `cardNumber` means the client sent an invalid request. According to HTTP standards, `400 Bad Request` is the correct response.

---

## Why Testing Matters

Testing proves that the endpoint behaves correctly for:

* valid card numbers
* invalid card numbers
* missing request input

It improves confidence in the application and shows production thinking.

---

## 📝 Important Notes

* This API only validates card number structure and checksum
* It does NOT verify if the card is active
* It does NOT verify if the card belongs to a real bank
* It does NOT perform payment processing

It focuses purely on validation logic.

---

## 👤 Author

**Ahmed Olaneye**

Backend Developer Intern Assessment Submission
