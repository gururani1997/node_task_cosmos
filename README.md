# Express-Node.js API Project

This is a Node.js application built using the Express framework. The project leverages **Axios** for making HTTP requests and **Express Validator** for validating user input. Additionally, it includes a sample API endpoint that accepts a `POST` request to fetch user data based on a username.

## Features

- **Express.js**: A fast and lightweight framework for building web applications and APIs.
- **Axios**: An HTTP client for making API calls to external services.
- **Express Validator**: Middleware for input validation to ensure data integrity.
- **Postman**: Example usage for testing the API with a `POST` request.

## Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/gururani1997/node_task_cosmos.git

2. Install dependencies:
   npm install

3. Start the server:
   nodemon

4. Environment Variables:
   API_URL=https://jsonplaceholder.typicode.com/users

5. API Endpoints:
   /api/getUserByUname
  payload: {
    "username": "Leopoldo_Corkery"
   }   
   /api/getUsers
   payload : N/A

6. Testing with Postman
 To test the POST /api/getUserByUname endpoint:

 1.Open Postman and create a new request.
 
 2.Set the request type to POST.
 
 3.Enter the following URL:
  http://localhost:3000/api/getUserByUname
  
 4.In the Body tab, select raw and set the format to JSON.
 
 5.Add the payload:
   {
    "username": "Leopoldo_Corkery"
   }
   
 6.Click Send to view the response.

 To test the GET /api/getUsers endpoint:

 1.Open Postman and create a new request.
 
 2.Set the request type to GET.
 
 3.Enter the following URL:
  http://localhost:3000/api/getUsers

 4..Click Send to view the response.

Technologies Used:
Node.js: JavaScript runtime for building server-side applications.

Express.js: Web framework for creating APIs and handling HTTP requests.

Axios: Library for making HTTP requests.

Express Validator: Middleware for validating and sanitizing user input.

Postman: Tool for testing and debugging API requests.
