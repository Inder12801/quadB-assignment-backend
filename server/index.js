const express = require('express');
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const saveData = require('./Routes/storeData');
const cors = require('cors');
require('./db/connectDB');
require('./Routes/storeData');
saveData();
app.use(cors());

app.use('/QuadBAPI',require('./Routes/fetchData'));

app.listen(port,()=>{console.log("Listening on port "+port)});
