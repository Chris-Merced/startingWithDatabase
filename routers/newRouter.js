const { Router } = require('express');
const newRouter = Router();
const newController = require("../controllers/newController"); 


newRouter.get('/', newController.displayNew);
newRouter.post('/', newController.insertNew);

module.exports = newRouter;