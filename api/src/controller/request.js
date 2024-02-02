import UserModel from '../models/user.js'
import RequestModel from "../models/request.js"
import EmailService from '../utils/EmailService.js'

const getRequestCount = async(req,res)=>{
    try {
        let type = req.query.type
        let countData = await RequestModel.aggregate([
            {$group:{_id:"$status", count:{$sum:1}}}
          ])
        res.status(200).send({
            message:"Request Fetched",
            countData
        })
    } catch (error) {
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}

const getRequestByType = async(req,res)=>{
    try {
        let status = req.query.status
        let request = await RequestModel.find({status:status})
        res.status(200).send({
            message:"Request Fetched",
            request
        })
    } catch (error) {
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}
const getRequestById = async(req,res)=>{
    try {
        let request = await RequestModel.findById(req.params.id)
        res.status(200).send({
            message:"Request Fetched",
            request
        })
    } catch (error) {
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}

const createRequest = async(req,res)=>{
    try {
        const {email,name,type,title,phone,description} = req.body
       let request = await RequestModel.create({
            name:name,
            email: email,
            phone: phone,
            type: type,
            title: title,
            description: description,
        })

        await EmailService.sendWelcomeEmail(email,name,type,title,request._id)

        res.status(201).send({
            message:"Request Raised Successfully",
            id:request._id
        })

    } catch (error) {
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}


const assign = async(req,res)=>{
    try {
        const {_id,userId} = req.body
        let user = await UserModel.findById(userId)
        if(user)
        {
            let request = await RequestModel.findById(_id)

            request.status = "In-Progress"
            request.assignedTo = user.name
            request.assignedAt = new Date()

            await request.save()

            res.status(200).send({
                message:"Request Assigned Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}
const resolve = async(req,res)=>{
    try {
        const {_id,resolution} = req.body
        let request = await RequestModel.findById(_id)
        if(request)
        {
            request.status = "Clossed"
            request.resolution = resolution
            request.clossedAt = new Date()

            await request.save()

            res.status(200).send({
                message:"Request resolved Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid Request"
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}

export default {
    getRequestCount,
    getRequestByType,
    getRequestById,
    createRequest,
    assign,
    resolve
}