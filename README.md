# PROBAR APIs CON THUNDER CLIENT

- Adjunté en la raiz del proyecto un archivo json denominado `api-test.thunder-client.json` contiene las pruebas de las endpoints.
- Use la extension Thunder-Client en VScode y puede importar este json para tener las pruebas listar para usar.


Para probar las apis usando `serverless offline`, use la siguiente base URL: `http://localhost:4000`.

para probar la API sobre AWS,use la siguiente base URL: `https://xx97tlitsf.execute-api.us-east-1.amazonaws.com`.

# DOCUMENTACION DE APIs
## Endpoints
### Get Key traducidas para las personas por id - Using SWAPI/people

Muestra informacion sobre el uso de swapi/people traduciendo al español sus keys.

- **URL:** `GET /dev/translated-people/{id}`
- **Parameters:**
  - `id` (path parameter): The ID of the translated person.
- **Response:**
  - Status: 200 OK
  - Body: JSON object containing the details of the translated person.

### Get Key traducidas para las planetas por id - Using SWAPI/planets

Muestra informacion sobre el uso de swapi/planet traduciendo al español sus keys.

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

- created by: `miguel ramirez`