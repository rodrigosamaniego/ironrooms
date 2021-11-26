//importaciones
const express = require("express")
const router = express.Router()

const usersController = require("./../controllers/usersController")
const routeGuard = require("./../middlewares/route-guard")
//ruteo
router.get("/profile", routeGuard.usuarioLoggeado, usersController.profile)

module.exports = router
