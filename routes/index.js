const express = require("express")
const router = express.Router()

const indexController = require("./../controllers/indexController")

router.get("/", indexController.home)

//Crear ususario
//Mostar formulario
router.get("/signup", indexController.viewRegister)
//enviar datos a BD
// router.post("/signup", indexController.register)

//mostrar login
router.get("/login", indexController.viewLogin )



module.exports = router