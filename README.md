# mini-api

I created this repository to provide a starting point for a minimal API using Node.js, Express, and TypeScript. It also includes a Dockerfile, allowing you to run the API in any environment using Docker.

The architectural approach is a layered design, with clear separation of concerns. This not only improves scalability but also makes it easier to implement your preferred testing strategies.

## Why

Whenever I work on a fullstack project, I always need an API. Most of the time, it starts with a small endpoint, but as the project grows, having a solid, scalable structure becomes crucial. This template aims to provide that foundation, so you can scale your API without too much hassle.

## What I've Learned Over Time

When building APIs, I strive to keep things as minimalistic as possible—"less is more." For this example, I chose Node.js with TypeScript (transpiled to JavaScript), and Express.js as the server framework. Express is lightweight and works well with minimal code.

### Folder Structure

I follow the MVC pattern for the folder structure. Although I haven't fully implemented the models yet, the groundwork is in place.

```bash
|-- dist           # Compiled JavaScript output
|-- src
|   |-- controllers
|   |-- middlewares
|   |-- routes
|   |-- server.ts
```

### Middlewares and Dependencies Used

- `cors`: Enables Cross-Origin Resource Sharing.
- `dotenv`: Loads environment variables from a `.env` file.
- `http-status-codes`: Provides constants for HTTP status codes.
- `morgan`: HTTP request logger middleware.
- `nodemon`: Utility that monitors for changes and automatically restarts the server (for development).

## Routes and Controllers

The API is organized using the MVC pattern:

- **Routes**: Define the endpoints and map them to controller actions (see `src/routes`).
- **Controllers**: Contain the logic for handling requests and responses (see `src/controllers`).

You can add new routes in the `src/routes` directory and implement their logic in the corresponding controller files in `src/controllers`.

---

## Example Usage

To run the project locally:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

To run with Docker:

```bash
docker build -t mini-api .
docker run -p 3000:3000 mini-api
```

---

## How to Add a New Route

1. **Create a Controller:**
   - Add a new file in `src/controllers/` (e.g., `userController.ts`).
   - Export functions to handle requests.
2. **Define the Route:**
   - Add a new file or update an existing one in `src/routes/` (e.g., `user.ts`).
   - Use Express Router to define endpoints and map them to controller functions.
3. **Register the Route:**
   - Import and use the new route in `src/server.ts`.

---

## Testing

You can add your preferred testing framework (e.g., Jest, Mocha) to test controllers and routes. The layered structure makes it easy to mock dependencies and write unit/integration tests.

---

## License

MIT
