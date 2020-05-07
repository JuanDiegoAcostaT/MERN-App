const express = require('express');
const cors = require('cors');
const app = express();

//Settings

app.set('PORT', process.env.PORT || 3000);


//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));


// Routes

app.get('/api/users', (req, res, next) => {  res.send('Users Routes')})
app.get('/api/notes', (req, res, next) => {  res.send('Notes Routes')})

//Export

module.exports = app;



