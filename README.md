 
# Project 1: REST API Fundamentals
Built with Node.js and Express.js for DecodeLabs Industrial Training 2026.

## How to Run
1. Install dependencies
   npm install

2. Start the server
   npm start

3. Server runs on http://localhost:3000

## API Endpoints

| Method | Route           | Description          |
|--------|-----------------|----------------------|
| GET    | /               | Health check         |
| GET    | /products       | Get all products     |
| GET    | /products/:id   | Get product by ID    |
| POST   | /products       | Create a new product |

## Example POST Request
URL: POST http://localhost:3000/products

Body:
{
  "name": "Monitor",
  "price": 299
}

Response (201 Created):
{
  "id": 4,
  "name": "Monitor",
  "price": 299
}

## Tech Stack
- Node.js
- Express.js

## Status Codes Used
- 200 OK
- 201 Created
- 400 Bad Request
- 404 Not Found