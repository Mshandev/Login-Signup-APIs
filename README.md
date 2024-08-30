# MERN Authentication with JWT

This project is a backend application built using Node.js, Express.js, and MongoDB. It features APIs for user authentication, including signup and login functionality, secured with JWT (JSON Web Token) for session management and Bcrypt for password hashing.

## Features

- User Signup API: Allows new users to register by creating an account.
- User Login API: Authenticates users and generates a JWT token for secure access.
- JWT Authentication: Secures APIs by requiring a valid token for protected routes.
- Password Hashing with Bcrypt: Ensures that passwords are securely stored in the database.

## Run Locally

Clone the project

```bash
    git clone https://github.com/Mshandev/Login-Signup-APIs
```
Go to the project directory
Install dependencies

```bash
    npm install
```
Setup Environment Vaiables

```Make .env file and store environment Variables
  SALT=10
  JWTPRIVATEKEY=PRIVATE_KEY
  DB=YOUR-DB-URL
 ``` 
Start the server

```bash
    npm start
```
## Tech Stack
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)


## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
