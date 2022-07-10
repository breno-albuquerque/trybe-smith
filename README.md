# trybe-smith

It is a medieval items store, in the format of an API !

## Features:

##### Register/Log in
  * Register at the endpoint post ("/users")
  * The body must have the following format:
  ```json
  {
    "username": "username",
    "classe": "classname",
    "level": 1,
    "password": "password"
  }
  ```
  * Log in at the endpoint post ("/login")
   * The body must have the following format:
   ```json
  {
    "username": "username",
    "password": "password"
  }
  ```
  * Both endpoints return a JWT token
  * The JWT token is required for all other endpoints at authorization header

##### Get Products
  * Get all the products at the endpoint get ("/products")
  * The response will have the following format:
  ```json
  [
    {
      "id": 1,
      "name": "product name",
      "amount": "10 parts...",
      "orderId": 6
    },
    {
      "id": 2,
      "name": "product name 2",
      "amount": "20 parts...",
      "orderId": 4
    }
  ]
  ```
  
##### Get orders
  * Get all orders history at the enpoint get ("/orders")
  * The response will have the following format:
  ```json
  [
    {
      "id": 1,
      "userId": 1,
      "productsIds": [1, 3]
    },
    {
      "id": 3,
      "userId": 2,
      "productsIds": [4]
    }
  ]
  ```

##### Create a product
  * Create a new product at the endpoint post ("/products")
  * The body must have the following format:
  ```json
   {
    "name": "New product name",
    "amount": "30 parts of ..."
   }
   ```
   
##### Make an order
  * Create a new order at the endpoint post ("/orders")
  * The body must have the following format:
  ```json
  {
    "productsIds": [1, 2]
  }
  ```
  * It is possible to make an order with one, two or with how many products desire

## Main tech stack:

- TypeScript
- Node.js
- Express
- MySQL

## Running it localy:

#### Requirements:

- NodeJS (>16)
- MySQL

##### Clone Repository

```
git clone git@github.com:breno-albuquerque/trybe-smith.git
```

##### Set the Back-end environment variables

- Change the .env.example file name to .env
- Type your own data base credentials

##### Install and Run the Node.js API

```
cd trybe-smith
npm install
npm start
```
