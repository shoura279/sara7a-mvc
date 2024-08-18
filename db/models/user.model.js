import { model, Schema } from "mongoose";

const schema = new Schema({
    name: String,
    email: String,
    password: String
}, {
    timestamps: true
})
export const User = model('User', schema)