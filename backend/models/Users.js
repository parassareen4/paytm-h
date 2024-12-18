import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
})

const User = mongoose.model('User',usersSchema)

export default User