////////////////////////
// DEPENDENCIES
///////////////////////
require('dotenv').config();

const express = require('express'); //server framework

//////////////
// EXPRESS APP
/////////////
const app = express(); //handles express functions
const PORT = process.env.PORT || 3001;

///////////////
// MIDDLEWARE
//////////////

//////////////
// ROUTES
//////////////
app.get("/", (req, res) =>{
    res.send("Ready");
});


//////////////
// LISTENER
///////////////
app.listen(PORT, ()=> console.log("They're listening on port " + PORT));