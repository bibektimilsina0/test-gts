# Project Setup

This project consists of a **backend** and a **frontend**. Follow the steps below to set up and run the project.

---

## Backend Setup

The backend is built using **Node.js** and **Express.js**.

### Prerequisites

- Install [Node.js](https://nodejs.org/) (v14 or higher recommended).

### Steps

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   - For production:
     ```bash
     npm start
     ```
   - For development (with hot-reloading using `nodemon`):
     ```bash
     npm run dev
     ```

4. The backend server will run on **http://localhost:5000**.

---

## Frontend Setup

The frontend is built using **React** and **Vite**.

### Prerequisites

- Install [Node.js](https://nodejs.org/) (v14 or higher recommended).

### Steps

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm run dev
   ```

4. The frontend server will run on **http://localhost:5173** by default. Open this URL in your browser to view the application.

---

## Notes

- Ensure both the backend and frontend servers are running simultaneously.
- The frontend communicates with the backend at **http://localhost:5000**. If you change the backend port, update the API URLs in the frontend code accordingly.