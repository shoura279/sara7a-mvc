import { model, Schema } from "mongoose";

const schema = new Schema({
    message: String,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
}, {
    timestamps: true
})
export const Message = model('Message', schema)