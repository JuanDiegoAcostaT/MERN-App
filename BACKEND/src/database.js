const mongoose = require('mongoose');

// const URI = process.env.MONGODB_URI ? 
// process.env.MONGODB_URI :
//  'mongo://localhost/databasetest';

const URI = 'mongodb+srv://JuanDiego:Motocros123@cluster0-f04ip.mongodb.net/test?retryWrites=true&w=majority';

const connection = mongoose.connection;


mongoose.connect(URI , {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex : true,
     useFindAndModify : false
     } )
     .catch( err => console.log(err))

     connection.once('open', _ => {
         console.log('DataBase is connected to', URI )
     });

     connection.on('error', (err) => {
         console.log(err)
     })