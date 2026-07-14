import express from "express";

const router = express.Router();

const tasks = [
    {
        id : 1,
        title : "Task 1",
        done : false
    },
    {
        id : 2,
        title : "Task 2",
        done : true
    },
    {
        id : 3,
        title : "Task 3",
        done : false
    }
]

router.get("/", (req, res) => {
    res.statusCode = 200;
    res.json(tasks)
})

router.get("/:id", (req, res) => {
    const taskId = parseInt(req.params.id);
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        res.statusCode = 200;
        res.json(task)
    } else {
        res.statusCode = 404;
        res.json({
            "error": `Task ${taskId} not found`
        })
    }
}) 

export default router;