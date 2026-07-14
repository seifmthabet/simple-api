# Simple API

An in-memory Express task API with JSON responses and Swagger UI documentation.

## Install & Run

From the repository root, run:

```bash
npm install && npm run dev
```

The server starts on `http://localhost:3000` and the Swagger UI is available at `http://localhost:3000/docs`.

## Endpoints

| Method | Path | Description | Success |
| --- | --- | --- | --- |
| GET | `/` | Basic API metadata and the top-level task endpoint list | `200` |
| GET | `/health` | Health check | `200` |
| GET | `/docs` | Swagger UI | `200` |
| GET | `/tasks` | List all tasks | `200` |
| GET | `/tasks/:id` | Get a task by id | `200`, `404` |
| POST | `/tasks` | Create a new task | `201`, `400` |
| PUT | `/tasks/:id` | Update a task | `200`, `400`, `404` |
| DELETE | `/tasks/:id` | Delete a task | `204`, `404` |

## Example `curl -i`

```bash
$ curl -i http://localhost:3000/tasks/1
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 38
ETag: W/"26-aKst2jrzuFjYdRudlan+1nM7StI"
Date: Tue, 14 Jul 2026 13:35:22 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":1,"title":"Task 1","done":false}
```

## Swagger Screenshot

![Swagger UI](vscode-chat-response-resource://7673636f64652d636861742d73657373696f6e3a2f2f6c6f63616c2f4d54466b4e5449794f4751744e446b775a6930304e57526d4c546b344e6a4d744d6d4d77597a426c4d544a6a4e7a4534/tool/call_mwcqoYv9EqQNQJrFNJBDu931/0/file.jpe)