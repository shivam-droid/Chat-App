# 🚀 Chat App - MERN Stack  

![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)  ![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)  ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=white)  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  

---

## 📖 Overview  

The **Chat App** is a real-time communication platform developed using the **MERN stack** (MongoDB, Express.js, React, Node.js). The application is structured into **backend** and **frontend** modules, offering seamless user interaction and messaging capabilities.


---

## API's

  - /api/auth/signup *(For signup)*
  - /api/auth/login *(For login)*
  - /api/auth/logout *(For logout)*
  - /api/messages/user/:id *(For sending message)*
  - /api/messages/:id *(For getting conversation)*
  - /api/users/ *(For getting all users in DB)*


---
## ⚙️ Steps to Build  

### Backend  
1. Set up a basic Express.js server.  
2. Configure environment variables using **dotenv**.  
3. Implement middleware for authentication.  
4. Create and define API routes:  
   - **authRoutes**: Signup, login, logout.  
   - **messageRoutes**: Send and fetch messages. 
   - **userRoutes**: Get all Users for sidebar. 
5. Define MongoDB schemas and models:  
   - **User**: Stores user credentials.  
   - **Message & Conversation**: Manages chat data.  
6. Implement controllers:  
   - **authController**: Handles user authentication.  
     - Signup Endpoint  
     - Login Endpoint  
     - Logout Endpoint  
   - **messageController**: Manages chat functionality.  
     - Send Message Endpoint  
     - Get Message Endpoint  
   - **userController**: Manage all users for sidebar.
    - Get All users Endpoint

### Frontend  
1. Create a responsive React application.  
2. Develop reusable components (e.g., ChatBox, Navbar).  
3. Define routes for navigation (e.g., Login, Signup, Chat).  
4. Manage global state using React hooks or Redux.  

---

## 🛠️ Libraries & Tools  

- **Backend**:  
  - [Express.js](https://expressjs.com/)  
  - [MongoDB](https://www.mongodb.com/)  
  - [Mongoose](https://mongoosejs.com/)  
  - [Dotenv](https://www.npmjs.com/package/dotenv)  

- **Frontend**:  
  - [React](https://reactjs.org/)  
  - [Axios](https://axios-http.com/)  

---

## 🌟 Features  

- 🔒 **Authentication**: User signup, login, and logout.  
- 💬 **Real-Time Messaging**: Chat with other users seamlessly.  
- 📄 **Database Integration**: Securely store user and message data.  
- 🖥️ **Responsive UI**: Optimized for desktop and mobile devices.  

---

# 👨‍💻 Contributors
**Shivam Singhal**




