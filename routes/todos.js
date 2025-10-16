const express = require("express");
const router = express.Router();


//import controller
const {createTodo} =require("../controllers/createTodo");
// const {getTodo} =require("../controllers/getTodo");
const {getTodo} = require("../controllers/getTodo");
const {getTodoById}=require("../controllers/getTodoById")
// const {updateTodo} = require("../controllers/updateTodo");



//define APi routes
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodoById);
// router.put("/updateTodo/:id",updateTodo);

module.exports = router;
 
