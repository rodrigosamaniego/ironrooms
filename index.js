// ./index.js
// 1. IMPORTACIONES
const express 	= require("express")
const app		= express()
const hbs		= require("hbs")

const connectDB = require("./config/db")
const sessionManager = require("./config/session")

require("dotenv").config()

// 2. MIDDLEWARES
sessionManager(app)
app.use(express.static("public"))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

hbs.registerPartials(__dirname + "/views/partials")

app.use(express.urlencoded({ extended: true }))

connectDB()

// 3. RUTAS
app.use((req, res, next) =>{
    res.locals.currentUser = req.session.currentUser
    next()
})

app.use("/", require("./routes/index"))
app.use("/signup", require("./routes/index"))
app.use("/login", require("./routes/index"))
app.use("/users", require("./routes/users"))
app.use("/rooms", require("./routes/rooms"))



// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor conectado en el puerto ${process.env.PORT}`)
})