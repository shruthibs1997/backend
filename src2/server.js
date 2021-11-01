const express = require("express");
const connect = require("./config/db");
const app = express();
var cors = require('cors')
app.use(cors()) 
const {register,login}=require("./controllers/user.controller")

app.use(express.json());


app.post("/register",register);
app.post("/login",login);


app.listen(8808,async()=>{
    await connect()
    console.log("listening to port 8808")
})