const express = require("express");
const router = express.Router();
const TaskController = require("../controllers/TaskController");

//ADD
router.get("/add", TaskController.createTask);
router.post("/add", TaskController.createTaskSave);

//REMOVE
router.post("/remove", TaskController.removeTask);

//EDIT
router.get("/edit/:id", TaskController.updateTask);
router.post("/edit", TaskController.updateTaskSave);

//UPDATE
router.post('/updatestatus', TaskController.toggleTaskStatus)

//HOME
router.get("/", TaskController.showTasks);

module.exports = router;
