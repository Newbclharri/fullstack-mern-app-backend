////////////
// DEPENDENCIES
////////////
require('dotenv').config();

const mongoose = require('mongoose');

//Establish Connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI);

//Save Connection
const cnx = mongoose.connection;

//Conncetion Logs
cnx
    .on("open", ()=> console.log("MongoDB OPEN"))
    .on("close", ()=> console.log("MongoBD CLOSED"))
    .on("error", (err)=> console.log(err));


//Export Connection
module.exports = mongoose;