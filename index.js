
// impport required packages
require('dotenv').config();
const express = require('express');
const path = require('path')

// import database connection
require('./config/db');

// middleware
// create the express app

const app = express();

//set the port
const PORT = process.env.PORT || 3000;

//body parser middleware:to parse form data and json
app.use(express.json()); //o accept the json data
app.use(express.urlencoded({extended:true})); // to accept the form data

// serve your stataic file(your index.html and style.css file)
// this line tells express to serve any file from the public folder
app.use(express.static(path.join(__dirname,'public')));

// routes
//placeholder for your api routes 

app.use('/api',require('./routes/url.routes'));

app.use('/',require('./routes/redirect.routes'));

//start the server
app.listen(PORT,()=>{
    console.log(`🚀 Server running on http://localhost:${PORT}`)
})


