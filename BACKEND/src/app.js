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

app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))



//Export

module.exports = app;

