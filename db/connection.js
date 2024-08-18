import mongoose from "mongoose";

export const connectDb = () => mongoose.connect('mongodb://localhost:27017/sara7a-test').then(() => console.log('db connected successfully'))