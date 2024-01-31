import mongoose from "mongoose";

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)

export default mongoose