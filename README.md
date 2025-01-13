## Chat App - MERN Stack

# Overview

This is a chat application built using the MERN stack (MongoDB, Express.js, React, Node.js). It allows users to communicate in real-time. The application is divided into two main parts:

## Folder Structure

chat-app/
│
├── backend/                # Express.js server (Backend)
│   ├── controllers/        # Controllers to handle routes
│   ├── models/             # Mongoose models (Database Schema)
│   ├── routes/             # API routes (e.g., users, messages)
│   ├── config/             # Configurations (e.g., DB, server)
│   └── server.js           # Main server entry file
│
├── frontend/               # React Application (Frontend)
│   ├── public/             # Static files (e.g., index.html)
│   ├── src/                # React source code
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Pages for different app views
│   │   ├── App.js          # Main React app file
│   │   └── index.js        # Entry point for React
│   └── package.json        # Frontend dependencies
│
└── package.json            # Main package.json for both backend and frontend

# Steps
- Simple Express App 
- Using Dotenv package
- Used middleware and created authRoutes file for signup,login,logout routes
- Created authController for signup,login,logout routes
- connect to DB 
- Signup Endpoint 