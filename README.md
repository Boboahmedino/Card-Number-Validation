# 🎴 Card Validator API

> A clean, lightweight, and professional TypeScript backend API for validating card numbers using the **Luhn algorithm**.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict%20Mode-3178C6?logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-5.x-000000?logo=express\&logoColor=white)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/Tested%20with-Postman-FF6C37?logo=postman\&logoColor=white)](https://www.postman.com/)
[![Tests](https://img.shields.io/badge/Tests-Node%20%2B%20Supertest-4B5563?logo=node.js\&logoColor=white)](#testing)

---

## ✨ Overview

The **Card Validator API** is a small backend service built with **Node.js**, **TypeScript**, and **Express.js** that validates whether a card number is valid by applying the industry-standard **Luhn checksum algorithm**.

The project is structured to be easy to read, easy to explain, and easy to maintain. It demonstrates clean backend architecture using:

* **Routes** → define API endpoints
* **Controllers** → handle request and response logic
* **Services** → contain business logic
* **Tests** → verify API behavior

This project was created as part of a Backend Developer Assessment to demonstrate:

* REST API design
* Input validation and error handling
* Card number checksum verification
* Clean project structure
* TypeScript strict-mode development
* Manual API testing with Postman
* Automated endpoint testing
* Professional backend thinking

---

## 🚀 Features

* 🔒 Card number validation using the **Luhn Algorithm**
* ✅ Strict request validation
* 📦 Clear and consistent JSON responses
* 🧩 Modular architecture using Routes, Controllers, and Services
* ⚠️ Proper HTTP status codes
* 🧪 Automated tests using Node test runner + Supertest
* 🧑‍💻 Manual testing using Postman
* 🧹 Graceful handling of invalid JSON payloads

### Validation Rules

The API validates that:

* `cardNumber` is required
* `cardNumber` must be a string
* Empty values are rejected
* Only digits and spaces are allowed
* Final validation is performed using the Luhn checksum algorithm

---

## 🛠 Tech Stack

| Technology       | Purpose                         |
| ---------------- | ------------------------------- |
| Node.js          | Runtime environment             |
| TypeScript       | Type safety and maintainability |
| Express.js       | Backend framework               |
| Postman          | Manual API testing              |
| Supertest        | API endpoint testing            |
| Node Test Runner | Automated testing               |

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

## ⚠️ Bad Request Responses

### Missing Input

```json
{
  "success": false,
  "message": "cardNumber is required and must be a string"
}
```

### Empty Input

```json
{
  "success": false,
  "message": "cardNumber cannot be empty"
}
```

### Invalid Characters

```json
{
  "success": false,
  "message": "cardNumber must contain digits and spaces only"
}
```

### Invalid JSON Payload

```json
{
  "success": false,
  "message": "Invalid JSON payload"
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
├── dist/
├── package.json
├── package-lock.json
├── tsconfig.json
├── jest.config.js
├── .gitignore
└── README.md
```

> `dist/` contains the compiled JavaScript output after running the build command.

---

## ⚙️ How to Run the Project

### 1. Clone the Repository

```bash
git clone https://github.com/Boboahmedino/Card-Number-Validation.git
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

```text
Server is running on port 3000
```

This means the API is active and ready to receive requests.

---

### 4. Build for Production

```bash
npm run build
```

---

### 5. Start Compiled Version

```bash
npm start
```

---

### 6. Run Tests

```bash
npm test
```

---

## 🧪 Testing the API with Postman

Postman is the easiest way to test the API manually.

---

## Using Postman

### Step 1

Open **Postman** and create a new request.

---

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

## Expected Response

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
  "message": "cardNumber is required and must be a string"
}
```

---

## 🧠 Design Decisions

## Why Express.js?

Express.js was chosen because this project only requires a single endpoint. It is lightweight, easy to set up, and much easier to explain during a technical review compared to larger frameworks.

---

## Why TypeScript?

TypeScript improves code reliability through static typing and strict mode checks. It helps catch development errors early and makes the project easier to maintain and scale.

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

## Why Return 400 for Invalid Input?

A missing or invalid `cardNumber` means the client sent a bad request. According to HTTP standards, `400 Bad Request` is the correct response.

---

## Why Testing Matters

Testing proves that the endpoint behaves correctly for:

* valid card numbers
* invalid card numbers
* missing request input
* invalid JSON payloads

It improves confidence in the application and demonstrates production thinking.

---

## 📝 Important Notes

* This API only validates card number structure and checksum
* It does NOT verify if the card is active
* It does NOT verify if the card belongs to a real bank
* It does NOT perform payment processing

It focuses purely on validation logic.

---

## 📌 Submission Notes

This project was submitted as part of a Backend Developer Assessment.

The focus of the assessment includes:

* code correctness
* clean structure
* error handling
* testing
* README quality
* GitHub commit history
* live code explanation during review

Because of this, the code was intentionally written to be simple, clean, professional, and easy to explain line by line.

---

## 👤 Author

**Ahmed Olaneye**
