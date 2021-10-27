const express = require("express");

const app = express();
app.use(express.json());

const connect = require("./config/db");

const userController = require("./contoller/user.controller");
app.use('/users',userController)


app.listen(2345,async()=>{
    await connect()
    console.log("listening to the port 2345")
})