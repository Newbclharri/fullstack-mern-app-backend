////////////
// DEPENDENCIES
////////////
require('dotenv').config();

const mongoose = require('mongoose');

//Establish Connection
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL);

//Save Connection
const cnx = mongoose.connection;

//Conncetion Logs
cnx
    .on("open", ()=> console.log("MongoDB OPEN"))
    .on("close", ()=> console.log("MongoBD CLOSED"))
    .on("error", (err)=> console.log(err));


//Export Connection
module.exports = mongoose;