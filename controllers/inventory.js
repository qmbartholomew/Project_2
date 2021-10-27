/*          DEPENDENCIES            */
const express = require("express")
const Inventory = require("../models/inventory.js")

/*          ROUTER CREATION         */
const router = express.Router()

/*          ROUTES          */
// Index route
router.get("/", (req, res) => {
    Inventory.find({})
    .then((items) => {
        res.render("index.liquid", {items})
    })
    .catch((error) => {
        res.json({error})
    })
})

// New route
router.get("/new", (req, res) => {
    res.render("new.liquid")
})

// Create route
router.post("/", (req, res) => {
    Inventory.create(req.body)
    .then(() => {
        res.redirect("/inventory")
    })
    .catch((error) => {
        res.json({error})
    })
})

// destroy route - delete request - /fruits/:id
router.delete("/:id", (req, res) => {
    // grab the id from params
    const id = req.params.id
    // delete the fruit
    Fruit.findByIdAndRemove(id)
    .then((fruit) => {
        // redirect user back to index
        res.redirect("/fruits")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
})

// edit route - get request - /fruits/:id/edit
router.get("/:id/edit", (req, res) => {
    // get the id from params
    const id = req.params.id

    // get the fruit with the matching id
    Fruit.findById(id)
    .then((fruit) => {
        // render the edit page template with the fruit data
        res.render("fruits/edit.liquid", { fruit })
    })
    // error handling
    .catch((error) => {
        res.json({error})
    })
})

// update route - put request - "/fruits/:id"
router.put("/:id", (req, res) => {
    // get the id from params
    const id = req.params.id
    
    // convert the checkbox property to true or false
    req.body.readyToEat = req.body.readyToEat === "on" ? true : false

    // update the item with the matching id
    Fruit.findByIdAndUpdate(id, req.body, {new: true})
    .then((fruit) => {
        // redirect user back to index
        res.redirect("/fruits")
    })
     // error handling
     .catch((error) => {
        res.json({error})
    })
}
)

// Show route
router.get("/:id", (req, res) => {
    const id = req.params.id

    Inventory.findById(id)
    .then((item) => {
        res.render("show.liquid", {item})
    })
    .catch((error) => {
        res.json({error})
    })
})

/*          EXPORT ROUTER           */
module.exports = router