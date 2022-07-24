const mongoose = require('mongoose');

const contactDatabase = ()=>{
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((data)=>{
        console.log(`mongodb contact with server: ${data.connection.host}`);
    })
}

module.exports = contactDatabase;