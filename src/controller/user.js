import {findIndex} from '../common/helper.js'
const user = [{
    id:1,
    name:"Nagarajan",
    email:"nag@gmail.com",
    password:"123",
    status:true,
    role:"user"
}]

const getAllUsers = (req,res)=>{
    try {
        res.status(200).send({
            message:"User data fetch successful",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const getUserById = (req,res)=>{
    try {
        const {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            res.status(200).send({
                message:"User data fetch successful",
                user:user[index]
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id",
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const addUser = (req,res)=>{
    try {
        let id = user.length?user[user.length-1].id+1:1

        req.body.id = id
        
        user.push(req.body)

        res.status(200).send({
            message:"User Added Successfully"
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const editUserById = (req,res)=>{
    try {
        const {id} = req.params
        let index = findIndex(user,id)
        
        if(index!==-1)
        {
            req.body.id = Number(id)
            user.splice(index,1,req.body)
            res.status(200).send({
                message:"User Edited successful"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id",
            })
        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
}

const deleteUserById = (req,res)=>{
    try {
        const {id} = req.params
        let index = findIndex(user,id)
        if(index!==-1)
        {
            user.splice(index,1)
            res.status(200).send({
                message:"User Deleted Successfully",
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id",
            })
        }
    } catch (error) {
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