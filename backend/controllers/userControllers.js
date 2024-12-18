import User from "../models/users.js"
import jwt from "jsonwebtoken"



const createToken = (_id)=>{
    const token = jwt.sign({_id}, process.env.SECRET, {expiresIn:"3d"})
    return token
}

const login = async(req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.login(email,password)
        const token = createToken(user._id)
        res.status(200).json({user, token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const register = async(req, res)=>{
    const {email, password} = req.body
    try {
        const user = await User.signup(email, password)

        const token = createToken(user._id)
        res.status(200).json({email, token})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


export { login, register }