const express = require("express")
const router = express.Router()

const indexController = require("./../controllers/indexController")

const routeGuard = require("./../middlewares/route-guard")


router.get("/", indexController.home)

//Crear ususario
//Mostar formulario
router.get("/signup", routeGuard.usuarioNoLoggeado, indexController.viewRegister)
//enviar datos a BD
router.post("/signup", routeGuard.usuarioNoLoggeado, indexController.register)

//mostrar login
router.get("/login", routeGuard.usuarioNoLoggeado, indexController.viewLogin )
router.post("/login", routeGuard.usuarioNoLoggeado, indexController.login )
router.get("/logout", routeGuard.usuarioLoggeado, indexController.logout)


module.exports = router