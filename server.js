const express = require('express');
const errorhandler = require('./middleware/errorhandler');
const connectDb = require('./config/dbConnection');
const dotenv =require('dotenv').config()
const app = express()
const port = process.env.PORT || 5000;


connectDb();

app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"))
app.use("/api/users", require("./routes/userRoutes.js"));
app.use(errorhandler)

app.listen(port, () => {
    console.log(`Server lisening at ${port}`)
})

