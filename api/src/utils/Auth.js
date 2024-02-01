import bcrypt from 'bcryptjs'
import jwt, { decode } from 'jsonwebtoken'
const SALT = 10

const createHash = async(data)=>{
    let salt = await bcrypt.genSalt(SALT)
    let hash = await bcrypt.hash(data,salt)
    return hash
}

const hashCompare = async(data,hash)=>{
    return await bcrypt.compare(data,hash)
}

const createToken = async(payload)=>{
    let token = await jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY
    })
    return token
}
const decodeToken = async(token)=>{
    return await jwt.decode(token)
}

const authenticate = async(req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]
    
    if(token)
    {
        let payload = await decodeToken(token)
        let currentTime = +new Date()
        if(Math.floor(currentTime/1000)<payload.exp)
        {
            next()
        }
        else{
            res.status(402).send({
                message:"Session Expired"
            })
        }
    }
    else
    {
        res.status(402).send({
            message:"Unauthorised access"
        })
    }
    
}

const adminGuard = async(req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]
    
    if(token)
    {
        let payload = await decodeToken(token)
        if(payload.role==='admin')
        {
            next()
        }
        else{
            res.status(402).send({
                message:"Only Admins are allowed"
            })
        }
    }
    else
    {
        res.status(402).send({
            message:"Unauthorised access"
        })
    }
    
}

const superAdminGuard = async(req,res,next)=>{
    let token = req?.headers?.authorization?.split(" ")[1]
    
    if(token)
    {
        let payload = await decodeToken(token)
        if(payload.role==='super-admin')
        {
            next()
        }
        else{
            res.status(402).send({
                message:"Only Super Admins are allowed"
            })
        }
    }
    else
    {
        res.status(402).send({
            message:"Unauthorised access"
        })
    }
    
}

export default {
    createHash,
    hashCompare,
    createToken,
    authenticate,
    adminGuard,
    superAdminGuard
}