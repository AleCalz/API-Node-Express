# User and Post Management API
## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [How to run](#how-to-run)
4. [Endpoints](#endpoints)

## General Info
***
This API enables the management of users and posts, including CRUD operations (Create, Read, Update, Delete) for both entities. It utilizes JSON Web Tokens (JWT) for user authentication and authorization, and is implemented with the Mongoose library for data manipulation in MongoDB.

## Technologies
***
A list of technologies used within the project:

* [bcryptjs](https://www.npmjs.com/package/bcryptjs): Version 2.4.3 
* [dotenv](https://www.npmjs.com/package/dotenv): Version 16.4.5
* [Express](https://expressjs.com/): Version 4.19.2
* [http-errors](https://www.npmjs.com/package/http-errors): Version 2.0.0
* [JSON Web Tokens](https://jwt.io/): Version 9.0.2
* [Mongoose](https://mongoosejs.com/): Version 8.4.1

## How to run
***

1. Install dependencies
```
npm install
```

2. Create an `.env` file
```
touch .env
```
you can find the kees needed in the `example.env` file

3. To run in dev mode
```
npm run dev
```
4. To run in production mode
```
npm start
```
## Endpoints
***
### Users
* **GET /users/{id}:** Retrieve a specific user by ID.
* **POST /users:** Create a new user.

* **GET /users:** Retrieve all users.
* **PATCH /users/{id}:** Update an existing user.
* **DELETE /users/{id}:** Delete a user.

### Login
* **POST /auth/login:** Returns a token for that user.

### Posts
* **GET /posts:** Retrieve all posts.
* **GET /posts/search:** Retrieve a specific post by title.
    * Parameters:
        * title (query param): Search query for post content.
* **POST /posts:** Create a new post.
* **PATCH /posts/{id}:** Update an existing post without updating the user.
* **DELETE /posts/{id}:** Delete the post only if it is the same user who created it.
