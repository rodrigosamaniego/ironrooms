const User = require("./../models/User")
const bcryptjs = require("bcryptjs")


exports.home = async (req, res) => {
    res.render("home")
}

exports.viewRegister = (req, res) => {
    
    res.render("signup")
}

exports.register = async (req, res) => {
    //Obtención de datos
    const email = req.body.email
    const password = req.body.password
    //Validación
    if(!email || !password){
        res.render("signup", {
            errorMessage: "Campos vacíos"
        })
        return
    }
    //password fuerte
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
    if(!regex.test(password)){
        res.render("signup", {
            errorMessage: "Tu password debe de contener 6 caracteres, mínimo un número y una mayúscula."
        })
        return
    }

    try{
    //encriptación del password
    const salt = await bcryptjs.genSalt(10)
    const passwordEncriptado = await bcryptjs.hash(password, salt)

    const newUser = await User.create({
        email,
        passwordEncriptado
    })
    console.log(newUser)
    //Redirección a login
    res.redirect("/login")
}catch (error){
    console.log(error)
    res.satus(500).render("signup", {
        errorMessage: "Hubo un error"
    })
}
}
    


exports.viewLogin = async (req, res) => {
    res.render("login")
}

exports.login = async (req, res) => {
    try{
        const email = req.body.email
        const password = req.body.password

        const foundUser = await User.findOne({email})
        if(!foundUser){
            res.render("login",{
                errorMessage: "sin coincidencia"
            })
            return
        }
        const verifiedPass = await bcryptjs.compareSync(password, foundUser.passwordEncriptado)
        if(!verifiedPass){
            res.render("login", {
                errorMessage: "datos mal"
            })
            return
        }
        res.redirect("/")
    
    }catch (error) {
        console.log(error)
    }
}