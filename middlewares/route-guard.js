// Áreas privadas - el usuario debe de estar loggeado para acceder
const usuarioLoggeado = (req, res, next) => {

    //Evaluar si el usuario no está loggeado
    //Si no está loggeado enviarlo a login
    if(!req.session.currentUser){
        res.redirect("/login")
        return
    }

    //Si está loggeado enviarlo a la siguiente función
    next()

}

//Áreas de autenticación
const usuarioNoLoggeado = (req, res, next) => {

    //Evaluación 
    //en caso de estar autenticado

    if(req.session.currentUser){
        return res.redirect("/")
    }

    // Si no está autetnticado
    next()
}

module.exports = {
    usuarioLoggeado,
    usuarioNoLoggeado
}