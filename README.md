### This project is a secure and scalable RESTful API for note management using Node.js, Express.js, and MongoDB.


## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- [MongoDB](https://www.mongodb.com/) installed and running
- [Git](https://git-scm.com/) for cloning the repository

## Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/AneeshRijhwani25/backend_assignment_speer.git
   cd backend_assignment_speer
- Install dependencies:
  ```bash
   npm install
2. **Environment Variables**
- Create a ```.env``` file in the root directory with the following content:
  ```bash
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/yourdbname
    SECRET_KEY=your-secret-key
- Replace the MongoDB URI and the secret key with your own values.



3. **Start the server:**
    ```bash
    npm start 
- Your API will be running at ``` http://localhost:3000.```Access the API using tools like curl, Postman, or any other HTTP client.

# Endpoints
### Authentication Endpoints
- POST /api/auth/signup: Create a new user account.
- POST /api/auth/login: Log in to an existing user account and receive an access token.
### Note Endpoints
- GET /api/notes: Get a list of all notes for the authenticated user.
- GET /api/notes/:id: Get a note by ID for the authenticated user.
- POST /api/notes: Create a new note for the authenticated user.
- PUT /api/notes/:id: Update an existing note by ID for the authenticated user.
- DELETE /api/notes/:id: Delete a note by ID for the authenticated user.
- POST /api/notes/:id/share: Share a note with another user for the authenticated user.
- GET /api/search?q=:query: Search for notes based on keywords for the authenticated user.



