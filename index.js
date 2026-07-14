import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";

import swaggerDocument from "./openapi.json" with { type: "json" };
import router from "./routes/tasks.js";


const app = express();
app.use(bodyParser.json());
app.use("/tasks", router);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 3000;

app.get("/", (req, res) => {
    res.statusCode = 200;
    res.json({
        "name": "Task API",
        "version": "1.0.0",
        "endpoints": [
            "/tasks"
        ]
    })
})

app.get("/health", (req, res) => {
    res.statusCode = 200;
    res.json({
        "status": "ok"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})