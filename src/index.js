const express = require('express')   
const app = express();               
const port = 5000;
const dbConnect = require('./database/db');

dbConnect();


app.listen(port, ()=>console.log(`app is listening on ${port}`));