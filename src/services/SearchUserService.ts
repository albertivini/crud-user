import User from "../schemas/User";
import { ObjectId } from "mongoose";

export class SearchUserService {

    async execute(id: string) {

        const user = await User.findById(id)

        if (!user) {
            throw new Error("User not found.")
        }

        const userResponse = {
            id: user._id,
            name: user.name,
            username: user.username,
            password: user.password,
            lastAccess: user.lastAccess
        }

        return userResponse
    }
}