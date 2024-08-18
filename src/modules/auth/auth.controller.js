import { User } from "../../../db/models/user.model.js"

export const login = (req, res, next) => {
    res.render('login.ejs')
}
export const register = (req, res, next) => {
    res.render('register.ejs', { error: req.query.error })
}

export const handleLogin = (req, res, next) => {
    res.redirect('/message')
}
export const handleRegister = async (req, res, next) => {
    // handle register
    // check user exist 
    const userExist = await User.findOne({ email: req.body.email })
    if (userExist) {
        return res.redirect('/auth/register?error=user already exist')
    }
    await User.create(req.body)
    res.redirect('/auth/login')
}