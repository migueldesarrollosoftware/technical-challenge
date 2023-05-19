# CLONAR EL PROYECTO

Siga estos pasos para clonar el proyecto utilizando Git:

1. Abra una terminal en su sistema.

2. Navegue hasta el directorio donde desea clonar el proyecto.

3. Ejecute el siguiente comando para clonar el proyecto desde el repositorio Git:

   ```bash
   git clone https://github.com/migueldesarrollosoftware/technical-challenge.git
  ```

# INSTALACION Y EJECUCION DE PROYECTO EN LOCAL

Puedes ejecutar localmente utilizando Docker y sin Docker.
Siga las instrucciones correspondientes al enfoque que desea utilizar.

## Instalación y ejecución con Docker

### Requisitos
- Instalar Docker

Para la ejecución del proyecto con docker, siga estos pasos:

1. Posiciónese en la ubicación del proyecto en su terminal donde se encuentra el Dockerfile.
2. Ejecute el siguiente comando para construir la imagen del contenedor:

   ```bash
   docker build -t serverless-project .
   ```
3. Ejecute el siguiente comando para correr el contenedor:

   ```bash
   docker run -p 4000:4000 serverless-project
   ```
4. El proyecto Serverless estará ahora en ejecución en el puerto 4000. Puede acceder a él a través de su navegador web utilizando la siguiente URL: http://localhost:4000

- Nota: Si utiliza wsl2 probablemente deba hacer otra configuracion para acceder al recurso usando la ip del contenedor.

## Instalación y ejecución con Docker

### Requisitos
Antes de ejecutar el comando `serverless offline start`, asegúrese de tener los siguientes requisitos previos en su entorno:

- Node.js (versión 10 o superior)
- NPM (Node Package Manager)
- Credenciales de AWS de un usuario IAM con los permisos necesarios (Este usuario ya fue creado y sus credenciales estan en `migue_developer_accessKeys.csv` esto se encuentra en la raiz del proyecto)
- Debe tener instalado la AWS-CLI
- hacer `aws configure` y agregar las credenciales suministradas en `migue_developer_accessKeys.csv`

## Instalación y ejecución sin Docker

Si decide no utilizar Docker, siga estos pasos:

1. Abra una terminal y navegue hasta la ubicación del proyecto Serverless.

2. Ejecute el siguiente comando para instalar las dependencias del proyecto:

   ```bash
   npm install
   ```
3. Ejecute el siguiente comando para iniciar el proyecto Serverless en modo offline:

   ```bash
   serverless offline start
   ```
4. El proyecto estara en ejecucion en http://localhost:4000

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

Para probar las apis usando `serverless offline`, use la siguiente base URL: `http://localhost:4000`.

para probar la API sobre AWS,use la siguiente base URL: `https://xx97tlitsf.execute-api.us-east-1.amazonaws.com`.

- created by: `miguel ramirez`