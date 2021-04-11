const express = require('express');
const app = express();
const ConnectDB = require('./config/db')
//Connect DB
ConnectDB();
app.get('/', (req, res) => res.send("Hello"));
//port init
const port = process.env.port || 5000;
app.listen(port, () => console.log(`Api is running on ${port}`));