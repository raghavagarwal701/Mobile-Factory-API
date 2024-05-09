# Mobile Factory API

Welcome to the Mobile Factory API! This API allows you to create mobile phone orders based on configurable components.

## Installation

1. Clone this repository:

2. Navigate to the project directory:

3. Install dependencies:

## Usage

1. Start the server:

2. The server will start listening on port 3000 by default. You can change the port by modifying the `App.listen()` call in `App.js`.

3. Send a POST request to the `/orders` endpoint with a JSON body containing an array of component codes. For example:

POST http://localhost:3000/orders
Content-Type: application/json

{
"components": ["I", "A", "D", "F", "K"]
}


4. The server will respond with the order details in JSON format, including the order ID, total price, and parts.

## API Endpoints

- POST `/orders`: Create a new order with the specified components. Expects a JSON body with an array of component codes.

## Project Structure

- `App.js`: Main entry point of the application. Defines the Express.js server and routes.
- `MobileFactory.js`: Class definition for the MobileFactory, responsible for creating orders based on component codes.


By Raghav Agarwal
raghavagarwal701@gmail.com
https://github.com/raghavagarwal701
