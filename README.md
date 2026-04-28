# 🎴 Card Validator API

> A clean, lightweight, and professional TypeScript backend API for validating card numbers using the Luhn Algorithm.

[![Node.js](https://img.shields.io/badge/Node.js-18+-green?logo=node.js)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Express.js](https://img.shields.io/badge/Express.js-minimal-black?logo=express)](https://expressjs.com/)
[![Postman](https://img.shields.io/badge/Tested%20with-Postman-orange?logo=postman)](https://www.postman.com/)

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

## 📝 Important Notes

* This API only validates card number structure and checksum
* It does NOT verify if the card is active
* It does NOT verify if the card belongs to a real bank
* It does NOT perform payment processing

It focuses purely on validation logic.

---

## 👤 Author

**Ahmed Olaneye**
