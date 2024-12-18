import jwt from "jsonwebtoken"
import  model  from "../models/users.js"
const authentication = async(req, res, next)=>{
    const {authentication} = req.headers
    
    
    if(!authentication){
        res.status(401).json({error:"no token"})
    }
    
    const token = authentication.split(" ")[1]
    console.log(token)
    
    try {
        const {_id} = jwt.verify(token, process.env.SECRET)
        req.user = await model.findOne({_id}).select('_id')
        next()
    } catch (error) {
        res.status(401).json({error:"req not authorised"})
    }
}

export {authentication}