const app = require('./app');


// Starting Server

const startServer = async () => {
    await app.listen(app.get('PORT'));
    console.log(`Server on port ${app.get('PORT')}`)
}

startServer();