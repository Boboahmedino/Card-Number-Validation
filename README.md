# Card Validator API

A small TypeScript backend API that checks whether a card number is valid using the **Luhn algorithm**.

## Tech Stack

- Node.js
- TypeScript
- Express.js
- Node's built-in test runner
- Supertest

## Endpoint

### `POST /api/validate-card`

#### Request body

```json
{
  "cardNumber": "4532 0151 1283 0366"
}
```

#### Success response

```json
{
  "success": true,
  "cardNumber": "4532 0151 1283 0366",
  "isValid": true
}
```

#### Bad request response

```json
{
  "success": false,
  "message": "cardNumber is required and must be a string"
}
```

## Validation Rules

- `cardNumber` must be sent in the request body.
- `cardNumber` must be a string.
- Empty strings are rejected.
- Only digits and spaces are allowed.
- The validity check is done with the Luhn algorithm.

## Project Structure

```text
src/
  controllers/
  routes/
  services/
  tests/
  app.ts
  server.ts
```

## How to Run

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Build the project

```bash
npm run build
```

### 4. Run tests

```bash
npm test
```

## Example Request

```bash
curl -X POST http://localhost:3000/api/validate-card \
  -H "Content-Type: application/json" \
  -d '{"cardNumber":"4532 0151 1283 0366"}'
```

## Design Decisions

### Why Express.js
Express is simple, lightweight, and fast to explain during a review. Since the assessment only needs one endpoint, Express keeps the project easy to understand.

### Why the Luhn algorithm
The Luhn algorithm is the standard way to validate card numbers. It checks whether the number follows the expected checksum pattern.

### Why separate controller, route, and service files
This keeps the code clean and easy to maintain:

- **Route**: defines the endpoint
- **Controller**: handles request and response logic
- **Service**: contains the validation algorithm

### Why Node's built-in test runner
It avoids extra test runner issues and works cleanly with TypeScript through `ts-node`.

## Notes

This project validates the format and checksum of the card number. It does not check whether the card actually exists or whether it belongs to a specific issuer.
