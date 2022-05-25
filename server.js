////////////////////////
// DEPENDENCIES
///////////////////////
require('dotenv').config();

const express = require('express'); //server framework
const mongoose = require('./config/connection');
const People = require("./models/People");
const cors = require('cors');
const morgan = require('morgan');

//////////////
// EXPRESS APP
//////////////
const app = express(); //handles express functions
const PORT = process.env.PORT || 3001;

///////////////
// MIDDLEWARE
//////////////
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

//////////////
// ROUTES
//////////////
app.get("/", (req, res) =>{
    res.send("Ready");
});



//////////
//INDUCS
//////////

//index
app.get("/people", async (req, res) => {
    try{
        res.json(await People.find({}));
    }catch(err){
        res.status(400).json(err);
    }
});

//delete
app.delete("/people/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        await People.findByIdAndDelete(id);
        res.json(await People.find({}));
    }catch(err){
        res.status(400).json(err);
    }
});

//update
app.put("/people/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        await People.findByIdAndUpdate(id, req.body);
        res.json(await People.find({}));
    }catch(err){
        res.status(404).json(err);
    }
});

//create
app.post("/seed", async (req, res) =>{
    try{
        await People.deleteMany({});
       const response = await People.create(req.body);
        res.json(response);
    }catch(err){
        res.status(400).json(error);
    }
});

//show
app.get("/people/:id", async (req, res) =>{
    try{
        const id = req.params.id;
        res.json(await People.findById(id));
    }catch(err){
        res.status(400).json(err);
    }
});

//////////////
// LISTENER
//////////////
app.listen(PORT, ()=> console.log("They're listening on port " + PORT));