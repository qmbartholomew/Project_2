/*          DEPENDENCIES            */
const mongoose = require("./connection")

/*          INVENTORY MODEL CREATION            */
const {Schema, model} = mongoose 

const inventorySchema = new Schema({
    name: String,
    img: String,
    pricePaid: Number,
    priceListed: Number,
    datePurchased: String
})

const Inventory = model("Inventory", inventorySchema)

/*          MODEL EXPORT            */
module.exports = Inventory