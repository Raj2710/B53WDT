import express from 'express'
import EmailService from '../utils/EmailService.js'
const router = express.Router()


router.get('/email',async (req,res)=>{

   try {
    await EmailService.sendWelcomeEmail('Prabhu','Enquiry','Price of Additional Occupant')

    res.status(200).send({
        message:"Email Sent Successfully"
    })
   } catch (error) {
    res.status(500).send({
        message:error.message|| 'Internal Server Error'
    })
   }

})


export default router