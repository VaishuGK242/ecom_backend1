const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose')

const authMiddleware = (req,res,next)=>{
    const authHeader = req.header("Authorization")

    if(!authHeader)return res.status(401).json({message:"Invalid authorization"})

        const token = authHeader.split(" ")[1]
        if(!token) return res.status(401).json({message:"no token provided"})
            try{
        const verified = jwt.verify(token,process.env.JWT_SECRET)
        req.user = verified
        next()
        }
        catch(err){
            return res.status(401).json({message:"invalid token"})
        }
}

module.exports = authMiddleware

