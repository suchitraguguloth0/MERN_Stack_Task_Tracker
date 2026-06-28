# MERN Task Tracker (TaskFlow)

A modern, full-stack Task Tracker application built with the MERN stack (MongoDB, Express, React, Node.js). 
This project serves as a complete, production-ready internship assignment submission.
LIVE DEMO===https://majestic-pudding-12c110.netlify.app/
BACKEND API==https://mern-stack-task-tracker.onrender.com/
## 🚀 Tech Stack

### Frontend
- **React 18** (via Vite)
- **React Router DOM** (Routing)
- **Tailwind CSS v4** (Styling & Animations)
- **Axios** (HTTP Client)
- **React Hot Toast** (Notifications)

### Backend
- **Node.js & Express.js** (REST API)
- **MongoDB Atlas & Mongoose** (Database & ODM)
- **dotenv** (Environment variables)
- **cors** (Cross-Origin Resource Sharing)

## ✨ Features

### Core Requirements
- ✅ Create, Read, Update, and Delete (CRUD) tasks
- ✅ Form validation (client & server side)
- ✅ RESTful API architecture
- ✅ MongoDB Atlas integration
- ✅ Fully responsive modern UI
- ✅ Dynamic updates without page refresh

### Bonus Features Implemented
- 🎯 Search tasks by title or description
- 🎯 Filter tasks by Status (To Do, In Progress, Completed)
- 🎯 Filter tasks by Priority (Low, Medium, High)
- 🎯 Sort tasks (Newest, Oldest, Due Date)
- 🎯 One-click "Mark as Completed" toggle
- 🎯 Custom loading spinners
- 🎯 Toast notifications for all actions
- 🎯 Beautiful empty states
- 🎯 Graceful error handling

## 📁 Project Structure

```
Task_Tracker/
├── server/                    # Backend API
│   ├── config/db.js           # Database connection
│   ├── controllers/           # API Logic
│   ├── middleware/            # Error handlers
│   ├── models/                # Mongoose schemas
│   ├── routes/                # API routes
│   └── server.js              # Entry point
│
└── client/                    # React Frontend
    └── src/
        ├── components/        # Reusable UI components
        ├── hooks/             # Custom React hooks (useTasks)
        ├── pages/             # Route pages (Dashboard)
        ├── services/          # Axios API calls
        └── utils/             # Helpers & Constants
```

## 🛠️ Local Setup Instructions

### 1. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add your MongoDB Atlas connection string:
```env
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/tasktracker?retryWrites=true&w=majority
PORT=5000
NODE_ENV=development
```

Start the backend server:
```bash
npm run dev
```

### 2. Frontend Setup

Open a new terminal window:
```bash
cd client
npm install
npm run dev
```

The application will be available at `http://localhost:5173`.

## 🎨 UI/UX Highlights
- **Glassmorphism Design**: Frosted glass effects on cards, modals, and inputs.
- **Custom Animations**: Smooth stagger effects, modal transitions, and hover states.
- **Micro-interactions**: Spinners inside buttons during API calls, pulsing icons.
- **Color Coding**: Statuses and priorities have distinct, accessible color schemes.

## 📝 API Documentation

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/tasks` | Get all tasks (supports `?search`, `?status`, `?priority`, `?sort`) |
| GET | `/api/tasks/:id` | Get single task by ID |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update an existing task |
| DELETE | `/api/tasks/:id` | Delete a task |
