import {findIndex} from '../common/helper.js'
import DB_CONFIG from '../config/dbConfig.js'
import mongodb,{MongoClient} from 'mongodb'

const client =  new MongoClient(DB_CONFIG.DB_URL)

const getAllUsers = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(DB_CONFIG.DB_NAME)
        let users = await db.collection('users').find().toArray()
        res.status(200).send({
            message:"User data fetch successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error"
        })
    }
    finally{
        client.close()
    }
}
const getUserById = async(req,res)=>{
        await client.connect()
        try {
            const db = await client.db(DB_CONFIG.DB_NAME)
            let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
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
        finally{
            client.close()
        }
    }

const addUser = async(req,res)=>{
    await client.connect()
    try {
        const db = await client.db(DB_CONFIG.DB_NAME)
        //check if the email exists in db
        const user = await db.collection('users').findOne({email:req.body.email})
        if(!user)
        {
            //if email not found create the user
            let newUser = await db.collection('users').insertOne(req.body)
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
            message:"Internal Server Error"
        })
    }
    finally{
        client.close()
    }
}

const editUserById = async(req,res)=>{
    await client.connect()
        try {
            const db = await client.db(DB_CONFIG.DB_NAME)
            let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
            if(user)
            {
                await db.collection('users').updateOne({_id:new mongodb.ObjectId(req.params.id)},{$set:req.body})
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
                message:"Internal Server Error"
            })
        }
        finally{
            client.close()
        }
}

const deleteUserById = async(req,res)=>{
    await client.connect()
        try {
            const db = await client.db(DB_CONFIG.DB_NAME)
            let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(req.params.id)})
            if(user)
            {
                await db.collection('users').deleteOne({_id:new mongodb.ObjectId(req.params.id)})
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
        finally{
            client.close()
        }
}
export default {
    getAllUsers,
    getUserById,
    addUser,
    editUserById,
    deleteUserById
}