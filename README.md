# URL Shortener Service

Serverless URL shortener built with Node.js, TypeScript, AWS Lambda, API Gateway, and DynamoDB.

## Features
- Generate 5-character short URLs
- Click tracking
- 7-day auto-expiry with TTL extension
- O(1) lookups using DynamoDB GSI

## API Endpoints

**Create Short URL**
```
POST /get-short-url
{
  "url": "https://example.com/long-url"
}
```

**Get Original URL**
```
GET /get-original-url/{id}
```

## Setup
```bash
npm install
npm run build
npm run deploy
npm test
```