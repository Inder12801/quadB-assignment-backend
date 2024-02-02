const mongoose = require('mongoose'); 
require("dotenv").config();
const key = process.env.MONGO;
// const key = "mongodb://localhost:27017/QuadB";

mongoose.connect(key)
.then(console.log("Connected to mongo"))
.catch(e=>{console.log("Error in connecting to mongo")});