/////////////////////////////////////
// Import Our Dependencies
/////////////////////////////////////
require("dotenv").config() 
const mongoose = require("mongoose")

/////////////////////////////////////
// Establish Database Connection
/////////////////////////////////////
const DATABASE_URL = process.env.DATABASE_URL 
const CONFIG = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DATABASE_URL, CONFIG)

mongoose.connection
.on("open", () => console.log("Connected to Mongo"))
.on("close", () => console.log("disconnected from mongo"))
.on("error", (error) => console.log(error))

module.exports = mongoose