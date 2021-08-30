import mongoose, { Document, Schema } from "mongoose"

const conn = mongoose.connect("mongodb://localhost:27017/apiteste", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

type User = Document & {
    name: string
    username: string
    password: string
    lastAccess: Date
}

const UserSchema = new Schema<User>(
    {
        name: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        lastAccess: {
            type: Date
        }
    }
)
export default mongoose.model<User>('User', UserSchema)