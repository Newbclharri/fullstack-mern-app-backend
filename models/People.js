//////////
// DEPENDENCIES
//////////
const mongoose = require('mongoose');

//////////////
// DEFINE SCHEMA
/////////////
const PeopleSchema = new mongoose.Schema({
    name: String,
    image: String,
    title: String
});

const People = mongoose.model("People", PeopleSchema);


//Export Model
module.exports = People;