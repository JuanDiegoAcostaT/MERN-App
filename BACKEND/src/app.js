const express = require('express');
const app = express();

//Settings

app.set('PORT', process.env.PORT || 3000);


//Middlewares


app.use(express.urlencoded({ extended : false }));
app.use(express.json());



//Export

module.exports = app;



