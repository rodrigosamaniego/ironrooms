//Importaciones

const session = require("express-session")
const MongoStore = require("connect-mongo")

//Gestión de sesión

const sessionManager = (app) => {
    //Establecer seguridad
    app.set("trust proxy", 1)

    //Establecer la configuración de la sesión

    app.use(session({
        secret: process.env.SESSION,
        resave: true,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            maxAge: 100000000000000
        },
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI
        })
    }))
}

//Exportación
module.exports = sessionManager