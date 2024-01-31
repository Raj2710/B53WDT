import mongoose from './index.js'

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const requestSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        validate:{
            validator:validateEmail,
            message: props => `${props.value} is not a valid email!`
        }
    },
    phone:{
        type:String,
        required:[true,"Phone is required"],
        min:[10,"Enter Valid Phone Number"]
    },
    type:{
        type:String,
        required:[true,"Type is required"],
    },
    title:{
        type:String,
        required:[true,"Title is required"],
    },
    description:{
        type:String,
        required:[true,"Description is required"],
    },
    status:{
        type:String,
        default:'Open'
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    assignedTo:{
        type:String
    },
    assignedAt:{
        type:Date,
    },
    clossedAt:{
        type:Date,
    },
    resolution:{
        type:String,
    }
},
{
    collection:'requests',
    versionKey:false
})

const RequestModel = mongoose.model('requests',requestSchema)

export default RequestModel