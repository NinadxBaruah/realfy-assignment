# User Management System
## Project Overview
A full-stack User Management application using Node.js, Firebase Firestore, and vanilla JavaScript for CRUD operations.

## Deployed Application
- Live URL: [Link](https://ninadbaruah.me/projects/intern/2)
- video link:  [Frontend](https://ninadbaruah.me/videos/frontend.mp4) || [API test](https://ninadbaruah.me/videos/postmen.mp4) 

### API Testing with Postman Video Demo
<video src="https://github.com/user-attachments/assets/7ecd7c19-44fb-4ac0-986c-cbb79d3f55f1" controls width="600" muted="false"></video>

### Frontend Video Demo
<video src="https://github.com/user-attachments/assets/7a9b5f59-9ea8-49c0-95a8-688afaa2c427" controls width="600" muted="false"></video>

## Prerequisites
- Node.js (v14+)
- Firebase Account
- npm

## Local Setup
### 1. Environment Configuration
Create a `.env` file in the root directory with Firebase credentials:
```
FIREBASE_API_KEY=your_api_key
FIREBASE_AUTH_DOMAIN=your_auth_domain
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_STORAGE_BUCKET=your_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
FIREBASE_APP_ID=your_app_id
FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 2. Installation
```bash
npm install
npm run dev
```

## API Endpoints and Request Examples

### Create User (POST)
- **Endpoint**: `localhost:3000/users` or `https://ninadbaruah.me/projects/intern/2/api/v1/users`
- **Example Request Body**:
```json
{
  "name": "William Garcia", 
  "email": "william.garcia@gmail.com", 
  "age": 38, 
  "weight": 92, 
  "height": 185, 
  "healthGoals": "Reduce body fat"
}
```

### Update User (PUT)
- **Endpoint**: `localhost:3000/users/:id` or  `https://ninadbaruah.me/projects/intern/2/api/v1/users/:id`
- **Example Params**: `654a26bb-fce6-43ce-b1c7-3e6815250688`
- **Example Request Body**:
```json
{
  "name": "James Anderson", 
  "email": "james.anderson@yahoo.com", 
  "age": 42, 
  "weight": 88, 
  "height": 182, 
  "healthGoals": "Lose weight"
}
```

## Local API Endpoints
- **POST** `localhost:3000/users`: Create user
- **GET** `localhost:3000/users`: List users
- **GET** `localhost:3000/users/:id`: Get specific user
- **PUT** `localhost:3000/users/:id`: Update user
- **DELETE** `localhost:3000/users/:id`: Delete user

## Deployed API Endpoints
- **POST** `https://ninadbaruah.me/projects/intern/2/api/v1/users`: Create user
- **GET** `https://ninadbaruah.me/projects/intern/2/api/v1/users`: List users
- **PUT** `https://ninadbaruah.me/projects/intern/2/api/v1/users/:id`: Update user
- **DELETE** `https://ninadbaruah.me/projects/intern/2/api/v1/users/:id`: Delete user

## Firestore Collection Schema
```
users collection:
- id: string (unique identifier)
- name: string
- email: string
- age: number
- weight: number
- height: number
- healthGoals: string
- createdAt: timestamp
```

## Technologies
- Node.js
- Express.js
- Firebase Firestore
- Vanilla JavaScript
