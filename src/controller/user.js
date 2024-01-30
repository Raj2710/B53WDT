import UserModel from "../models/user.js"
import Auth from '../helper/auth.js'
const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find({},{password:0})
        res.status(200).send({
            message:"User data fetch successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}
const getUserById = async(req,res)=>{
        try {
            let user = await UserModel.findById({_id:req.params.id},{password:0})
            res.status(200).send({
                message:"User data fetch successful",
                user
            })
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"Internal Server Error"
            })
        }
    }
const createUser = async(req,res)=>{
    try {
        try { 
            //check if the email exists in db
            const user = await UserModel.findOne({email:req.body.email})
            if(!user)
            {
                //if email not found create the user
                //create hash for password
                req.body.password = await Auth.createHash(req.body.password)
                let newUser = await UserModel.create(req.body)
                res.status(200).send({
                    message:"User Added Successfully"
                })
            }
            else
            {
                //if email is found respond error message
                res.status(400).send({
                    message:`User with ${req.body.email} already exists`
                })
            }    
        } catch (error) {
            res.status(500).send({
                message:"Internal Server Error",
                error:error.message
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await UserModel.findOne({email:email})
        //check if the user exists
        if(user)
        {
            //compare the input password and hash
            if(await Auth.hashCompare(password,user.password))
            {
                //create token
                const token = await Auth.createToken({
                    name:user.name,
                    email:user.email,
                    role:user.role
                })
                res.status(200).send({
                    message:"Login Successfull",
                    token,
                    role:user.role,
                    id:user._id
                })
            }
            else
            {
                res.status(400).send({
                    message:`Incorrect Password`
                })
            }
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} does not exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

export default {
    getAllUsers,
    getUserById,
    login,
    createUser
}