# REST API Node.js and PostgreSQL

A RESTful CRUD API built with Node.js, Express.js, TypeScript, and PostgreSQL.

## 🚀 Live Demo

**Base URL:** `https://node-postgresql-restapibs-production.up.railway.app/`

## ✨ Features

- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ RESTful API design
- ✅ TypeScript for type safety
- ✅ PostgreSQL database integration
- ✅ Error handling and validation
- ✅ Production-ready deployment on Railway

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** PostgreSQL
- **ORM/Query Builder:** pg (node-postgres)
- **Deployment:** Railway

## 🔗 API Endpoints

| Method   | Endpoint     | Description       |
| -------- | ------------ | ----------------- |
| `GET`    | `/users/`    | Get all users     |
| `GET`    | `/users/:id` | Get user by ID    |
| `POST`   | `/users/`    | Create new user   |
| `PUT`    | `/users/:id` | Update user by ID |
| `DELETE` | `/users/:id` | Delete user by ID |

## 🛡️ Try Local - Docker

### Prerequisites

- Node.js (v20 or higher)
- npm or yarn
- Docker

```bash
docker compose up --detach   # run docker-compose
```

```bash
npm run dev      # Start development server with hot reload
npm run build    # Build TypeScript to JavaScript
npm start        # Start production server
```

The server will start on `http://localhost:3000/users/`
