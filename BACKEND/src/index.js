require('dotenv').config();
const app = require('./app');
const dataBase = require('./database');

// Starting Server

const startServer = async () => {
    await app.listen(app.get('PORT'));
    console.log(`Server on port ${app.get('PORT')}`)
}

startServer();