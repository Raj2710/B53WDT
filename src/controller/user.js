import UserModel from '../models/user.js'
import dotenv from 'dotenv'
dotenv.config()

const getAllUsers = async(req,res)=>{
    try {
        let users = await UserModel.find()
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
            let user = await UserModel.findById({_id:req.params.id})
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

const addUser = async(req,res)=>{
    try { 
        //check if the email exists in db
        const user = await UserModel.findOne({email:req.body.email})
        if(!user)
        {
            //if email not found create the user
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
}

const editUserById = async(req,res)=>{
        try {
            let user = await UserModel.findById({_id:req.params.id})
            if(user)
            {
                user.name = req.body.name
                user.email = req.body.email
                user.password = req.body.password
                user.status = req.body.status
                user.role = req.body.role

                await user.save()

                res.status(200).send({
                    message:"User Edited Successfully"
                })
            }
            else
            {
                res.status(400).send({
                    message:`Invalid User Id`
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"Internal Server Error",
                error:error.message
            })
        }
}

const deleteUserById = async(req,res)=>{
        try {
            let user = await UserModel.findById({_id:req.params.id})
            if(user)
            {
                await UserModel.deleteOne({_id:req.params.id})
                res.status(200).send({
                    message:"User Deleted Successfully"
                })
            }
            else
            {
                res.status(400).send({
                    message:`Invalid User Id`
                })
            }
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message:"Internal Server Error"
            })
        }
}
export default {
    getAllUsers,
    getUserById,
    addUser,
    editUserById,
    deleteUserById
}