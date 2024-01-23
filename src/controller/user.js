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

export default {
    getAllUsers
}