import RequestModel from "../models/request.js"
import EmailService from '../utils/EmailService.js'

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

export default {
    getRequestById,
    createRequest
}