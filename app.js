const express = require('express');
const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/AlienDBex'; // Replace with your database name if needed

const app = express();

// Improved connection configuration with both `useNewUrlParser` and `useUnifiedTopology`
mongoose.connect(url);
// ... rest of your application code
app.use(express.json());   //Middleware to parse json bodies
const alienRouter = require('./routes/aliens');
app.use('/aliens',alienRouter);


app.listen(9000,()=>{
    console.log("Server Started");
})

