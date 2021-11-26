


exports.home = async (req, res) => {
    res.render("home")
}

exports.viewRegister = (req, res) => {
    
    res.render("signup")
}

exports.register = async (req, res) => {
    
}

exports.viewLogin = async (req, res) => {
    res.render("login")
}