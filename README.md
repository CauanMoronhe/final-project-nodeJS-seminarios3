# Games Catalog API

REST API built with Node.js, TypeScript, Express, and PostgreSQL for creating and listing games. The project is organized in layers, separating routes, controllers, services, repositories, and database connection logic.

## Technologies

- Node.js
- TypeScript
- Express
- PostgreSQL
- node-postgres (`pg`)
- ts-node-dev

## Project Goal

The goal of this project is to practice building a REST API with layered architecture, data validation, and integration with a relational database.

The application allows users to:

- List registered games
- Create new games
- Validate required fields
- Validate ratings between 0 and 10
- Persist data in a PostgreSQL table

## Folder Structure

```text
src/
|-- controllers/
|   `-- game.controller.ts
|-- database/
|   `-- database.ts
|-- repositories/
|   `-- game.repository.ts
|-- routes/
|   `-- game.routes.ts
|-- services/
|   `-- game.service.ts
`-- server.ts
```

## Architecture

The project follows a simple separation of responsibilities:

- `routes`: defines the API endpoints
- `controllers`: receives requests and sends responses
- `services`: handles business rules and validations
- `repositories`: executes database queries
- `database`: configures the PostgreSQL connection
- `server.ts`: starts the Express server

Main flow:

```text
HTTP Request -> Route -> Controller -> Service -> Repository -> PostgreSQL
```

## Requirements

Before running the project, make sure you have installed:

- Node.js
- npm
- PostgreSQL

## Installation

Clone the repository:

```bash
git clone https://github.com/CauanMoronhe/final-project-nodeJS-seminarios3.git
```

Access the project folder:

```bash
cd final-project-nodeJS-seminarios3
```

Install the dependencies:

```bash
npm install
```

## Database Setup

This project uses PostgreSQL. The database connection is configured in:

```text
src/database/database.ts
```

Current configuration:

```ts
export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "12345678",
    port: 5432
});
```

Create the `games` table in PostgreSQL:

```sql
CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    categoria VARCHAR(100) NOT NULL,
    nota NUMERIC NOT NULL
);
```

## Running the Project

Start the development server:

```bash
npm run dev
```

The server will run at:

```text
http://localhost:3000
```

## Endpoints

### List Games

```http
GET /games
```

Example response:

```json
[
  {
    "id": 1,
    "nome": "The Last of Us",
    "categoria": "Adventure",
    "nota": "9"
  }
]
```

### Create Game

```http
POST /games
```

Example request body:

```json
{
  "nome": "God of War",
  "categoria": "Action",
  "nota": 10
}
```

Example response:

```json
{
  "id": 1,
  "nome": "God of War",
  "categoria": "Action",
  "nota": "10"
}
```

## Validations

When creating a game, the API validates:

- `nome` is required
- `categoria` is required
- `nota` must be between 0 and 10

Example error:

```json
{
  "erro": "Invalid rating"
}
```

## Available Scripts

```bash
npm run dev
```

Runs the server with `ts-node-dev`.

```bash
npm test
```

Default test script. Automated tests have not been configured yet.

## Future Improvements

- Implement game updates with `PUT /games/:id`
- Implement game deletion with `DELETE /games/:id`
- Search for a game by `id`
- Use environment variables for sensitive database credentials
- Add database migrations
- Add automated tests
- Standardize error responses
- Create API documentation with Swagger

## Author

Developed by Cauan Moronhe.
