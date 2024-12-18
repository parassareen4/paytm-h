import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String

})

const User = mongoose.model('User',usersSchema)

export default User