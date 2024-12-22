# Tuiter Full Stack Web App

## Overview

The **Tuiter Full Stack Web App** is a comprehensive social media platform that replicates the core features of a microblogging service similar to Twitter. It combines a modern **React** front-end with a scalable **Node.js** back-end, integrated with a **MongoDB** database for data storage. This web app allows users to create tweets, follow other users, and engage with tweets by liking and retweeting. The project uses key design patterns like **MVC**, **Singleton**, and **Observer**, ensuring that the code is modular, maintainable, and scalable.

The application provides an excellent foundation for adding advanced features and functionality, including enhanced user interactions, notifications, and further social networking capabilities.

## Technologies Used

### Front-End
- **React**: A powerful JavaScript library for building user interfaces with a component-based architecture.
- **JavaScript (ES6+)**: The main programming language used to develop interactive and dynamic features.
- **CSS**: Used to style the app, ensuring that the interface is responsive and aesthetically pleasing.
- **React Router**: Manages navigation within the app, enabling smooth transitions between different views and routes.
- **Jest**: A testing framework for writing unit tests for the React components.

### Back-End
- **Node.js**: A JavaScript runtime built on Chrome's V8 engine, enabling the development of the server-side logic.
- **Express.js**: A minimal web framework for Node.js that simplifies routing and handling HTTP requests.
- **MongoDB**: A NoSQL database used to store user data, tweets, and other application data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB, facilitating schema-based modeling and interaction with the database.
- **JWT (JSON Web Tokens)**: Used for secure user authentication and session management.

## Key Functionalities

### Front-End (React)
1. **User Interface**:
   - Designed with responsive components like tweet cards, navigation bars, and user profiles.
   - Interactive elements like buttons, forms, and modals to create and interact with tweets.

2. **Tweet Management**:
   - Users can create, like, retweet, and delete tweets, with real-time updates in the feed.
   - Tweets are displayed in user profiles, allowing users to see their own posts and interactions.

3. **Routing & Navigation**:
   - Seamless navigation between different views using React Router.
   - Dynamic routes for accessing user profiles and individual tweets.

4. **State Management**:
   - Local state management in components using React's `useState` and `useEffect` hooks.
   - Global state management through the Context API for handling user authentication and session data.

5. **API Integration**:
   - Fetches data from the back-end using Axios or the Fetch API.
   - Connects with the back-end RESTful API to manage data like user information and tweets.

6. **Testing**:
   - Uses Jest to run unit tests and ensure the reliability of components.

### Back-End (Node.js)
1. **Server Setup**:
   - **Express.js** handles HTTP requests, routing, and middleware configuration.
   - **app.js**: The main entry point that configures routes and middleware.

2. **Controllers**:
   - **auth-controller.js**: Manages user authentication (login, registration) using JWT tokens for secure authentication.
   - **tuits-controller.js**: Handles CRUD operations for tweets (create, read, update, delete).
   - **users-controller.js**: Manages user-related actions such as retrieving and updating user profiles.

3. **Data Access (DAO)**:
   - **users-dao.js**: Provides functions to interact with MongoDB, specifically for user data operations.
   - **users-model.js**: Defines the schema and structure for user data using Mongoose.
   - **users-schema.js**: Specifies the Mongoose schema for the user model, including fields such as username, password, and email.

4. **Database**:
   - **MongoDB**: A NoSQL database that stores data like users, tweets, and other necessary information.
   - **Mongoose**: Facilitates schema definition and interaction with MongoDB.

5. **Authentication**:
   - **JWT**: Utilizes JWT tokens for managing user sessions and validating protected routes.

## Design Patterns

### 1. **MVC (Model-View-Controller)**
   - **Description**: Separates the application into three layers for better organization: the **Model** (business logic and data), the **View** (user interface), and the **Controller** (manages inputs and updates the Model and View).
   - **Implementation**:
     - **Model**: Represented by Mongoose models, such as `users-model.js` for user data.
     - **View**: In this project, the view is represented by the React front-end components.
     - **Controller**: Handled by the Express controllers like `users-controller.js` and `tuits-controller.js`.

### 2. **Singleton Pattern**
   - **Description**: Ensures that a class has only one instance and provides a global point of access to it.
   - **Implementation**: Applied to the MongoDB connection using Mongoose, where the database connection instance is reused throughout the application.

### 3. **Observer Pattern**
   - **Description**: Ensures that when an object changes, all its dependent objects are notified and updated.
   - **Implementation**: React's state management system implements this pattern, where components re-render when state changes.

### 4. **Factory Pattern**
   - **Description**: Defines a method for creating objects without specifying the exact class of object that will be created.
   - **Implementation**: Applied when creating Mongoose models based on the schemas.

## Design Architecture

### 1. **Client-Server Architecture**
   - **Description**: The app follows a client-server architecture where the React front-end communicates with the Node.js back-end. The front-end makes requests to the back-end via RESTful APIs to manage data and display it to the user.
   - **Communication**: The client and server interact over HTTP requests and responses.

### 2. **RESTful API Design**
   - **Description**: The back-end exposes a set of RESTful API endpoints to allow the front-end to perform operations such as creating, reading, updating, and deleting resources (e.g., users, tweets).
   - **Implementation**: Controllers handle requests, interact with the database via DAOs, and return responses to the front-end.

### 3. **Component-Based Architecture (Front-End)**
   - **Description**: The front-end follows a component-based architecture, where each UI element is encapsulated in a reusable and modular component.
   - **Implementation**: React components are the building blocks of the UI, each managing its own state and rendering based on changes to state or props.

### 4. **Service Layer (Back-End)**
   - **Description**: The back-end has a service layer that abstracts the business logic, making the controllers focused on handling HTTP requests and delegating tasks to the service layer.
   - **Implementation**: The service layer is implied by how controllers interact with the DAOs, abstracting the logic away from route handling.

## Getting Started

### Installation

#### Front-End
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/jaissica/tuiter-react-web-app.git
   cd tuiter-react-web-app
   ```
2. **Install Dependencies:**
  ```bash
    npm install
  ```
3. **Run the Front-End:**
  ```bash
  npm start
  ```
#### Back-End
1. **Navigate to the Server Directory:**
  ```bash
  cd tuiter-node-server-app
 ```
2. **Install Dependencies:**
  ```bash
  npm install
  ```
3. **Set Up Environment Variables: Create a `.env` file in the root directory and configure the following:**
  ```bash
  MONGO_URI=mongodb://localhost:27017/tuiter
  JWT_SECRET=your_jwt_secret
 ```
4. **Run the Server:**
  ```bash
  node app.js
  ```
### Running the Full Stack Application
1. Start the back-end server.
2. Start the front-end development server.
3. Open `http://localhost:3000` to view the application.
