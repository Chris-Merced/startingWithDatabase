const deleteController = require("../controllers/deleteController");
const { Router } = require("express");
const deleteRouter = Router();

deleteRouter.post("/", deleteController.deleteUsernames);

module.exports = deleteRouter;