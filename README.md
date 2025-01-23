# CHAT-APPLICATION

"COMPANY": CODTECH IT SOLUTIONS

"NAME": YASH NARENDRA WAVHAL

"Intern ID": CT08JYP

"DOMAIN": FULL STACK DEVELOPMENT

"DURATION": 4 WEEKS

"MENTOR": NEELA SANTOSH

# Chat-Application with PERN Stack

This project is a **real-time chat application** built using the **PERN (PostgreSQL, Express, React, Node.js) stack** with additional technologies such as **TypeScript**, **Prisma**, and **Socket.io**. It is designed to provide seamless communication, user-friendly interfaces, and robust back-end functionality for modern chat applications. With advanced technologies, this app ensures real-time updates, and a scalable architecture.

---

## 🌟 **Tech Stack**

The project leverages a modern stack to achieve high performance and maintainability:

- **Frontend**: Built with React and styled using TailwindCSS for a responsive and visually appealing user interface.
- **Backend**: Developed with Node.js and Express.js to handle API requests and business logic efficiently.
- **Database**: Uses PostgreSQL for data persistence, managed with Prisma ORM for simplified queries and migrations.
- **Real-Time Features**: Powered by Socket.io for instant messaging and live updates.
- **State Management**: Zustand is employed for lightweight and effective global state management.
- **TypeScript**: Ensures type safety, reducing errors and improving code readability and maintainability.

---

## **Key Features**

### 🎃 **Authentication & Authorization**
- Implements secure user login and registration with **JSON Web Tokens (JWT)** for session management.
- Supports role-based access control to define user permissions and protect sensitive routes.

### 👾 **Real-Time Messaging**
- Enables users to send and receive messages instantly with **Socket.io**, ensuring smooth and interactive communication.
- Automatically updates conversations without requiring page reloads, enhancing user experience.

### 🚀 **Online User Status**
- Displays the online/offline status of users in chat rooms, managed in real-time with **Socket.io**.
- Leverages **React Context** to provide consistent status updates across the application.

### 👌 **Global State Management**
- Utilizes **Zustand** to manage application-wide states such as user sessions, active conversations, and online statuses.
- Offers a minimalistic and efficient approach to state management without unnecessary complexity.

### 🐞 **Error Handling**
- Includes comprehensive error-handling mechanisms on both the server and client sides.
- Displays user-friendly error messages and logs critical issues for debugging and maintenance.

### 👻 **TypeScript Tips and Tricks**
- Implements TypeScript best practices for robust and scalable code.
- Enforces strict typing across the app to reduce runtime errors and enhance developer productivity.

---

## **Installation and Setup**

Follow these steps to set up and run the project locally:

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies for both frontend and backend:  
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configure environment variables:  
   - Create a `.env` file in the `backend` folder with the necessary database connection strings and JWT secrets.  
   - Example:
     ```env
     DATABASE_URL=your_database_url
     JWT_SECRET=your_jwt_secret
     ```

4. Run database migrations with Prisma:  
   ```bash
   npx prisma migrate dev
   ```

5. Start the development servers:  
   - **Backend**:  
     ```bash
     npm run dev
     ```
   - **Frontend**:  
     ```bash
     npm start
     ```

---

## **Usage**

- **User Registration and Login**: Create an account or log in to access personalized chat features.  
- **Real-Time Messaging**: Send messages in real-time, with instant updates across connected users.  
- **User Status**: Monitor who is online in your chat room for dynamic interactions.  

---

## **Future Enhancements**

The project is designed with extensibility in mind. Future plans include:

- **Group Chats**: Adding support for group conversations and private group management.
- **Multimedia Messaging**: Enabling users to share images, videos, and files within chat rooms.
- **Search and Filtering**: Implementing advanced search functionalities for messages and chat histories.
- **Push Notifications**: Notifying users of new messages even when they are not actively using the app.
- **Theme Customization**: Allowing users to personalize the app's appearance with custom themes.

---
## **Image Links**

- **RIGESTER PAGE**: ![Register Page Screenshot](https://github.com/yash-wavhal/CHAT-APPLICATION/blob/main/frontend/public/Screenshot%202025-01-23%20185953.png)  
- **LOGIN PAGE**: ![Login Page Screenshot](https://github.com/yash-wavhal/CHAT-APPLICATION/blob/main/frontend/public/Screenshot%202025-01-23%20185844.png)  
- **WELCOME PAGE**: ![Welcome Page Screenshot](https://github.com/yash-wavhal/CHAT-APPLICATION/blob/main/frontend/public/Screenshot%202025-01-23%20190517.png)
- **CHAT INITIATION**: ![Chat Initiation Screenshot](https://github.com/yash-wavhal/CHAT-APPLICATION/blob/main/frontend/public/Screenshot%202025-01-23%20185037.png)

## **Conclusion**

This real-time chat app showcases the power of the PERN stack combined with modern technologies like TypeScript and Socket.io. It is a scalable, secure, and user-friendly solution for real-time communication, suitable for both personal and professional use cases. The app’s modular design makes it easy to extend and adapt to future requirements.
