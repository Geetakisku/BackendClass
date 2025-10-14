// step1:create a folder with name 
// step2:inside the folder 
// step3:npm init -y 
// step4:open this folder on vs code
// step5:on terminal type npm i express which installed the express 
// step6:create ServiceWorkerRegistration.js ya index.js

// server instantiate
// const express = require ('express');
// const app = express(); 

// // used to parse requestAnimationFrame.body in express
// const bodyparser = require('body-parser');
// // specifically paese JSON data & add it to the request.Body object =>put ya post
// app.use(bodyParser.json());

// // acctivate the server on 4000 port
// app.listen(4000,() =>{
//     console.log("Server started at port no.3000")
// });

// // routes
// app.get('/',(request,response) => {
//     response.send("Hello jii kaise ho");
// })

// app.post('/api/cars',(request,response) => {
//     const {name,brand} =request.body;
//     console.log(name);
//     console.log(brand);
//     response.send("Car submitted seuccessfully")
// })

// const mongoose =require('mongoose');

// mongoose.connect('mongodb://localhost:27017/myDatabase',{
//     useNewUrlParser : true,
//     useUnifiedTopology:true,
// })
// .then (() => {console.log("Connection Successful")})
// .catch( (error) => {console.log("Recieved an error")});

//new server create after routes create
const express = require("express");
const app = express(); 

//load config from env file
require("dotenv").config();
const PORT = process.env.PORT || 5000;

// middleware to parse json reaquest body 
app.use(express.json());

// import routes for TODO API
const todoRoutes =require("./routes/todos");

//mount the todo ASPI routes
app.use("/api/v1", todoRoutes);

//server start
app.listen (PORT,() =>{
    console.log(`server started successful at ${PORT}`);
})

//connect to the database 
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/createTodo",(req,res) => {
    res.send(`<h1> this is HOMEPAGE </h1>`);
})