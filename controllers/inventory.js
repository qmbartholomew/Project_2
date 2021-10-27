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

// Destroy/Delete route
router.delete("/:id", (req, res) => {
    const id = req.params.id
    Inventory.findByIdAndRemove(id)
    .then(() => {
        res.redirect("/inventory")
    })
     .catch((error) => {
        res.json({error})
    })
})

// Edit route
router.get("/:id/edit", (req, res) => {
    const id = req.params.id

    Inventory.findById(id)
    .then((item) => {
        res.render("edit.liquid", {item})
    })
    .catch((error) => {
        res.json({error})
    })
})

// Update route
router.put("/:id", (req, res) => {
    const id = req.params.id
    
    Inventory.findByIdAndUpdate(id, req.body, {new: true})
    .then(() => {
        res.redirect("/inventory")
    })
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