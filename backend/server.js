const app = require('./app');
const dotenv = require('dotenv');
const contactDatabase = require('./db/Database');

// config
 dotenv.config({
    path:"backend/config/.env"
 })

//  contact database
contactDatabase();

// create server
const server = app.listen(process.env.PORT,()=>{
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
