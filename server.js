/*          DEPENDECIES         */
require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const methodOverride = require("method-override")
const liquid = require("liquid-express-views")
const path = require("path")
const InventoryRouter = require("./controllers/inventory")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const viewsFolder = path.resolve(__dirname, "views/")

const app = liquid(express(), {root: viewsFolder})

/*          MIDDLEWARE          */
// Logging
app.use(morgan("tiny"))
// Ability to override request methods
app.use(methodOverride("_method"))
// Ability to parse urlencoded from for submission
app.use(express.urlencoded({extended: true}))
// Setup our public folder to serve files statically
app.use(express.static("public"))
// Middlware to create sessions (req.session)
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    resave: false
}))

/*          ROUTES         */
app.get("/", (req, res) => {
    res.render('index.liquid')
})
app.use("/inventory", InventoryRouter)

/*          SERVER LISTENER         */
const PORT = process.env.PORT
app.listen(PORT, () =>  console.log(`Listening on port ${PORT}`))