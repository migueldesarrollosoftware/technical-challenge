# Project

For detailed instructions, please refer to the [documentation](https://www.serverless.com/framework/docs/providers/aws/).

## Installation/deployment instructions

Depending on your preferred package manager, follow the instructions below to deploy your project.

> **Requirements**: NodeJS `lts/fermium (v.14.15.0)`. If you're using [nvm](https://github.com/nvm-sh/nvm), run `nvm use` to ensure you're using the same Node version in local and in your lambda's runtime.

### Using NPM

- Run `npm i` to install the project dependencies
- Run `npx sls deploy` to deploy this stack to AWS

### Using Yarn

- Run `yarn` to install the project dependencies
- Run `yarn sls deploy` to deploy this stack to AWS

# API Documentation

## Endpoints

### Get Translated Key Person by ID - Using SWAPI/people

Retrieve information about swapi/people translated keys by their ID.

- **URL:** `GET /dev/translated-people/{id}`
- **Parameters:**
  - `id` (path parameter): The ID of the translated person.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing the details of the translated person.

### Get Translated Key Planet by ID - Using SWAPI/planets

Retrieve information about a translated planet by its ID.

- **URL:** `GET /dev/translated-planet/{id}`
- **Parameters:**
  - `id` (path parameter): The ID of the translated planet.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing the details of the translated planet.

### Create Billboard

Create a new billboard entry.

- **URL:** `POST /dev/billboard`
- **Request Body:**
  - Content-Type: application/json
  - Body: JSON object representing the billboard entry.
    - Required fields:
      - `name` (string): The name of the billboard entry.
      - `description` (string): The description of the billboard entry.
- **Response:**
  - Status: 201 Created
  - Body: JSON object containing the details of the created billboard entry.

### Get Billboard

Retrieve information about the billboard.

- **URL:** `GET /dev/billboard`
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing the details of the billboard.

---

To test the API locally using `serverless offline`, use the following base URL: `http://localhost:4000`.

For the deployed API on AWS, use the following base URL: `https://xx97tlitsf.execute-api.us-east-1.amazonaws.com`.

- created by: `miguel ramirez`
